"""Verifica o fluxo real no Expo Go de um emulador Android e captura as telas.

Pré-requisitos: npm ci, Android SDK/adb e um emulador já iniciado.
Executar na raiz do projeto: python3 scripts/capturar_android.py
"""

import os
from pathlib import Path
import re
import subprocess
import time
import xml.etree.ElementTree as ET


OUTPUT = Path('docs/prints')
OUTPUT.mkdir(parents=True, exist_ok=True)


def adb(*args, binary=False):
    return subprocess.check_output(['adb', *args], timeout=35, text=not binary)


def hierarchy():
    adb('shell', 'uiautomator', 'dump', '/sdcard/estoque-window.xml')
    xml = adb('shell', 'cat', '/sdcard/estoque-window.xml')
    (OUTPUT / 'ultima-tela.xml').write_text(xml, encoding='utf-8')
    return list(ET.fromstring(xml).iter('node'))


def matches(node, label):
    return label in (node.get('text'), node.get('content-desc'))


def tap(node):
    coords = [int(n) for n in re.findall(r'\d+', node.get('bounds', ''))]
    if len(coords) != 4:
        raise RuntimeError('Elemento sem coordenadas na hierarquia Android.')
    x1, y1, x2, y2 = coords
    adb('shell', 'input', 'tap', str((x1 + x2) // 2), str((y1 + y2) // 2))


def wait_for(label, timeout=40, input_only=False):
    deadline = time.monotonic() + timeout
    while time.monotonic() < deadline:
        try:
            nodes = hierarchy()
            for node in nodes:
                if matches(node, label) and (
                    not input_only or node.get('class') == 'android.widget.EditText'
                ):
                    return node
        except (subprocess.SubprocessError, ET.ParseError):
            pass
        time.sleep(1)
    raise AssertionError(f'Elemento não encontrado no Android: {label}')


def click(label):
    tap(wait_for(label))


def fill(label, value):
    tap(wait_for(label, input_only=True))
    adb('shell', 'input', 'keyevent', '123')
    adb('shell', 'input', 'keyevent', *(['67'] * 60))
    adb('shell', 'input', 'text', value)
    adb('shell', 'input', 'keyevent', '4')


def capture(filename):
    (OUTPUT / filename).write_bytes(adb('exec-out', 'screencap', '-p', binary=True))
    print(f'Captura salva: {filename}', flush=True)


def await_app(process):
    deadline = time.monotonic() + 300
    last_popup = None
    while time.monotonic() < deadline:
        if process.poll() is not None:
            raise RuntimeError('O servidor Expo encerrou antes de abrir o aplicativo.')
        try:
            nodes = hierarchy()
            if any(matches(node, 'Endereço de e-mail') for node in nodes):
                return
            # Avisos iniciais do próprio Expo Go em uma instalação limpa.
            for label in ('Continue', 'Got it', 'I understand'):
                found = next((node for node in nodes if matches(node, label)), None)
                if found is not None and label != last_popup:
                    tap(found)
                    last_popup = label
                    break
        except (subprocess.SubprocessError, ET.ParseError):
            pass
        time.sleep(2)
    raise AssertionError('O aplicativo não abriu no Expo Go dentro do prazo.')


def verify():
    # Regressão: validar campos vazios não pode deixar o botão em loading.
    click('Entrar')
    wait_for('Informe o e-mail e a senha.')
    assert wait_for('Entrar').get('enabled') == 'true'
    print('OK: campos vazios não travam o login.', flush=True)

    assert wait_for('Senha', input_only=True).get('password') == 'true'
    fill('Endereço de e-mail', 'abdielb@yahoo.com')
    fill('Senha', 'errada')
    click('Entrar')
    wait_for('Usuário ou senha incorretos.')
    assert wait_for('Entrar').get('enabled') == 'true'
    print('OK: senha oculta e login inválido libera o botão.', flush=True)

    fill('Senha', '12345')
    click('Entrar')
    wait_for('Novo Produto')
    wait_for('DADOS DO PRODUTO')
    print('OK: Stack abre o sistema após o login.', flush=True)

    click('Saída')
    wait_for('Saída de Produto')
    wait_for('Nome do produto')
    wait_for('Quantidade de saída')
    wait_for('Motivo da retirada: Venda')
    capture('saida-produto.png')

    click('Motivo da retirada: Venda')
    for option in ('Venda', 'Avarias', 'Uso Interno'):
        wait_for(option)
    capture('motivos-retirada.png')
    click('Avarias')
    wait_for('Motivo da retirada: Avarias')
    click('Motivo da retirada: Avarias')
    click('Uso Interno')
    wait_for('Motivo da retirada: Uso Interno')
    click('Motivo da retirada: Uso Interno')
    click('Venda')
    print('OK: lista suspensa contém e seleciona os três motivos.', flush=True)

    click('Estoque')
    wait_for('Controle de Estoque')
    for label in ('Arroz integral 1 kg', 'Feijão carioca 1 kg', 'Açúcar cristal 1 kg', 'Estoque Baixo', 'Em Estoque', '45'):
        wait_for(label)
    capture('controle-estoque.png')
    print('OK: estoque exibe produtos, quantidades, status e totais.', flush=True)

    click('Novo Produto')
    wait_for('DADOS DO PRODUTO')
    click('Estoque')
    wait_for('Controle de Estoque')
    print('OK: navegação de ida e volta entre as três abas.', flush=True)


if __name__ == '__main__':
    adb('wait-for-device')
    adb('shell', 'wm', 'size', '1080x2400')
    adb('shell', 'wm', 'density', '440')
    env = {**os.environ, 'CI': '1', 'EXPO_NO_TELEMETRY': '1'}
    with (OUTPUT / 'expo-android.txt').open('w', encoding='utf-8') as log:
        process = subprocess.Popen(
            ['npx', 'expo', 'start', '--localhost', '--port', '8081', '--android'],
            stdout=log, stderr=subprocess.STDOUT, env=env,
        )
        try:
            await_app(process)
            verify()
            (OUTPUT / 'validacao.txt').write_text(
                'Verificação concluída no Android API 35, Expo Go SDK 54.\n'
                'Login, senha oculta, Stack, três abas, motivos e estoque: OK.\n',
                encoding='utf-8',
            )
        except Exception:
            capture('falha-android.png')
            raise
        finally:
            process.terminate()
