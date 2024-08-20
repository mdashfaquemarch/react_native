import { StyleSheet, Text, View } from 'react-native'
import React from 'react'



const CurrencyButton = (props) => {
    return (
        <View style={styles.buttonContatiner}>
             <Text style={styles.flag}>{props.flag}</Text>
             <Text style={styles.country}>{props.name}</Text>
        </View>
    )
}




const styles = StyleSheet.create({
    buttonContatiner: {
        alignItems: "center"
    },
    flag: {
        fontSize: 28,
        color: "#FFFFFF",
        marginBottom: 4,
    },
    country: {
        fontSize: 14,
        color: "#2d3436",
    }
})

export default CurrencyButton