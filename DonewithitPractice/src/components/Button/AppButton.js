import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../../config/colors'

export default function AppButton({title, onPress, color = "primary"}) {
  return (
    <Pressable style={[styles.buttonContainer, {backgroundColor: colors[color]}]} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
    buttonContainer: {
        width: "100%",
        padding: 15,
        backgroundColor: colors.primary,
        alignItems: "center",
        borderRadius: 25,
        marginVertical: 10,
    },
    text: {
        color: colors.white,
        fontSize: 18,
        fontWeight: "600",
        textTransform: "uppercase" 
    }
})