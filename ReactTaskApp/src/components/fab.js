import React from "react";
import { View,Image, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import LinearGradient from 'react-native-linear-gradient';

export default function FABAdd(props){


    return(
        <LinearGradient colors={['#FFC701', '#FF6B00']} style={Styles.linearGradient}>
            <TouchableOpacity onPress={()=> props.onFabClick()}>
                <Image
                    style={{width: 40, height: 40}}
                    source={require('../constants/Images/icon_add.png')}
                />
            </TouchableOpacity>    
        </LinearGradient>
    )
}

const Styles = StyleSheet.create({
    linearGradient :{
        height : 50,
        width : 50,
        borderRadius : 25,
        justifyContent:'center',
        alignItems:'center'
    }
})