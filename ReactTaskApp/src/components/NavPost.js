import React from "react";
import {View, Image,
     StyleSheet, 
     Dimensions,
     TouchableOpacity, 
     Text } from "react-native";
import Colors from "../constants/Colors";

export default function NavPost(props){


    return(
        <View style={{flexDirection:'row',justifyContent:'space-between'}}>
           
           <TouchableOpacity onPress={()=> props.backClick()}>
            <Image style={Styles.navHeaderImage}
                source={require('../constants/Images/icon_back.png')}
            />
            </TouchableOpacity>

             <TouchableOpacity style={Styles.styleBackground} 
                onPress={()=> props.onClickPost()}>
                    <Text style={Styles.textPost}>Post</Text>
             </TouchableOpacity>
        </View>
    )
}

const Styles = StyleSheet.create({
    navHeaderImage : {
        height : 30,
        width : 30,
        marginLeft : Dimensions.get('window').width - 420,

    },
    styleBackground : {
        height : 30,
        width : 80,
        borderRadius : 20,
        backgroundColor: '#E88607',
        justifyContent:'center',
        marginRight : Dimensions.get('window').width - 400
    },
    textPost:{
        fontSize: 16,
        color : Colors.TEXT_HEADER,
        textAlign : 'center',
        fontWeight : '700'
    }

})