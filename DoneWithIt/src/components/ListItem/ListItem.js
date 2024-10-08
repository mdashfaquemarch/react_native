import { Image, StyleSheet, Text, TouchableHighlight, View } from 'react-native'
import React from 'react'
import AppText from '../AppText/AppText'
import colors from '../../config/colors'

export default function ListItem({title, subTitle, image, onPress}) {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
    <View style={styles.container}>
           <Image source={image} style={styles.image}/>
           <View>
                 <AppText style={styles.title}>{title}</AppText>
                 <AppText style={styles.subTitle}>{subTitle}</AppText>
           </View>
    </View>
    </TouchableHighlight>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        padding: 15
    },
    image: {
        width: 70,
        height: 70,
        borderRadius: 35,
        marginRight: 10
    },
    title: {
        fontWeight: "500",
    },
    subTitle: {
        color: colors.medium
    }
})