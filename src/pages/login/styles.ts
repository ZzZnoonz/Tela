import { Dimensions, StyleSheet } from "react-native";
import { themas } from "../../global/themes";

export const style = StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxTop:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'red',
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxMid:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'green',
        //alignItems:'center',
        //justifyContent:'center'
        paddingHorizontal:37
    },
    titleInput:{
        marginLeft:5,
        color:themas.Colors.gray,
        marginTop:20
    },
    BoxInput:{
        width:'100%',
        height:40,
        borderWidth: 1,
        borderRadius: 40,
        marginTop: 10,
        flexDirection:'row',
        alignItems:'center',
        paddingHorizontal:10,
        backgroundColor:themas.Colors.lightGray,
        borderColor:themas.Colors.lightGray
    },
    Input:{
        height:'100%',
        width: '90%'
    },
    boxBottom:{
        height:Dimensions.get('window').height/3,
        width:'100%',
        //backgroundColor:'blue'
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