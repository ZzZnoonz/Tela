import React from "react";

import {
    Text,
    View,
    Image,
    TextInput
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'


export default function Login(){
    return(
        <View style={style.container}>

            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo} //chama o style da imagem
                    
                ></Image>

                <Text>Bem Vindo de volta !</Text>

            </View>

            <View style={style.boxMid}>

                <Text>Endereço de e-mail</Text>
                <TextInput></TextInput>

                <Text>Senha</Text>
                <TextInput></TextInput>    

            </View>

            <View style={style.boxBottom}>
                <Text>BAIXO</Text>
            </View>

        </View>

    )
}
