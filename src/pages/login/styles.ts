import { Dimensions, StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'green',
        alignItems:'center',
        justifyContent:'center'
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        backgroundColor:'blue'
    },
    logo:{
        width: 80, //define a menor largura possivel
        height: 80, //define a menor altura possivel
        resizeMode:"contain" //garantir que a imagem não mude de proporção
    },
    text:{
        fontWeight:'bold',
        marginTop:40
    }
})