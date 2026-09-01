import React, { useState } from "react";

// npx expo start --tunnel

import {
    Text,
    View,
    Image,
    TextInput,
    TouchableOpacity,
    Alert,
    ActivityIndicator
} from 'react-native';

import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons } from '@expo/vector-icons';
import { themas } from "../../global/themes";


export default function Login(){
    
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [loading,setLoading] = useState(false);

    async function getLogin(){
        try{
            setLoading(true)
            
            if(!email || !password){
                return Alert.alert('Atenção','Informe os campos obrigatórios')
            }

            //console.log('Logado com sucesso')

            setTimeout(()=>{
                if(email == "abdielb@yahoo.com" && password == '12345'){
                    Alert.alert('Logado com sucesso')
                }else{
                    Alert.alert('Usuario não encontrado')
                }

                setLoading(false) //verificar pq o botão entrar buga quando cai em Atenção','Informe os campos obrigatórios

            },3000)

        } catch (error){
            console.log(error)
        }
    }   

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

                    <TextInput style={style.Input}
                        value={email}
                        onChangeText={setEmail}
                    ></TextInput>

                    <MaterialIcons name="email" size={20} color={themas.Colors.gray}></MaterialIcons>

                </View>

                <Text style={style.titleInput}>Senha</Text>
                
                <View style={style.BoxInput}>

                    <TextInput style={style.Input}
                        value={password}
                        onChangeText={setPassword}
                    ></TextInput>

                    <MaterialIcons name="password" size={20} color={themas.Colors.gray}></MaterialIcons>

                </View>

            </View>

            <View style={style.boxBottom}>
                
                <TouchableOpacity style={style.button} onPress={()=>getLogin()}>
                    {
                        loading?
                            <ActivityIndicator color={'FFFF'} size={'small'}/>
                            :
                            <Text style={style.textButton}>Entrar</Text>

                    }
                    

                </TouchableOpacity>

            </View>

            <Text style={style.textBottom}>Não tem conta ? <Text style={{color:themas.Colors.primary}}>Crie agora !</Text> </Text>

        </View>

    )
}
