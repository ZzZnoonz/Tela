import React from "react";

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";

export default function Login(){
    return(
        <View style={style.container}>

            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo} //chama o style da imagem
                    
                ></Image>

                <Text style={style.text}>Bem Vindo de volta !</Text>

            </View>

           

            <View style={style.boxMid}>

                <Text style={style.titleInput}>Endereço de e-mail</Text>

                <View style={style.BoxInput}>

                    <TextInput style={style.Input}></TextInput>
                    <MaterialIcons name="email" size={20} color={themas.Colors.gray}></MaterialIcons>

                </View>

                <Text style={style.titleInput}>Senha</Text>
                
                <View style={style.BoxInput}>

                    <TextInput style={style.Input}></TextInput>
                    <MaterialIcons name="password" size={20} color={themas.Colors.gray}></MaterialIcons>

                </View>

            </View>

            <View style={style.boxBottom}>
                
                <TouchableOpacity style={style.button}>

                    <Text style={style.textButton}>Entrar</Text>

                </TouchableOpacity>

            </View>

            <Text style={style.textBottom}>Não tem conta ? <Text style={{color:themas.Colors.primary}}>Crie agora !</Text> </Text>

        </View>

    )
}
