import { Platform, StyleSheet, Text, View } from 'react-native'
import React from 'react'

import styles from '../styles.js'



export default function AppText(props) {
  return (
    <Text style={[styles.text,props.style]}>{props.children}</Text>
  )
}








// const styles = StyleSheet.create({
//     text : {
//         fontSize: 18,
//         ...Platform.select({
//             ios: {
//                 fontSize : 20,
//                 fontFamily: "Avenir"
//             },
//             android: {
//                 fontSize: 18,
//                 fontFamily: "Roboto"
//             }
//         })
//     }
// })