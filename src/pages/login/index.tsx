import React from "react";

import {
    Text,
    View,
    Image
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png'

export default function Login(){
    return(
        <View style={style.container}>

            <View style={style.boxTop}>
                <Text>TOP</Text>
            </View>

            <View style={style.boxMid}>
                <Text>MEIO</Text>
            </View>

            <View style={style.boxBottom}>
                <Text>BAIXO</Text>
            </View>

        </View>

    )
}
