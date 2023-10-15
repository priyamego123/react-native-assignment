import React from "react";
import {View, Image, StyleSheet, Dimensions, Text } from "react-native";
import Colors from "../constants/Colors";

export default function NavHeader(){

    return(
        <View >
            <Image style={styles.navHeaderImage}
                source={require('../constants/Images/ProfilePicture.png')}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    navHeaderImage : {
        height : 40,
        width : 40,
        borderRadius : 20,
        marginLeft : Dimensions.get('window').width - 400,
        marginVertical : 15

    }
})