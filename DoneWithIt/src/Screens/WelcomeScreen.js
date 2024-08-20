import { ImageBackground, StyleSheet, Text, View , StatusBar, Image, ScrollView} from 'react-native'
import React from 'react'
import ViewImageScreen from './ViewImageScreen'
import AppButton from '../components/Button/AppButton'
import colors from '../config/colors'
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function WelcomeScreen() {
    return (
    <>
     <StatusBar  style="light"/>
     <ImageBackground 
     blurRadius={50}
     style={styles.background}
     source={{
         uri: "https://plus.unsplash.com/premium_photo-1671477603648-06d5b96bb271?q=80&w=1854&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        }}>

       
        <View style={styles.logoContainer}>
        {/* <Image  style={styles.logo} source={require("../assets/log.png")}/> */}
        <FontAwesome name="twitter" size={110} color="dodgerblue" />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
        </View>
        <View style={styles.buttonContainer}>
         <AppButton title="Login" />
         <AppButton title="Register" color='secondary'/>
        </View>

       
     </ImageBackground>
         </>
        
  )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center",
        
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center",
        
    },
    logo : {
        width: 100,
        height: 100,
        
    },

    buttonContainer: {
        width: "100%",
        padding: 20,
        
    },

    tagLine: {
        fontSize: 25,
        fontWeight: "600",
        padding: 20,
         color: colors.white
    }
})