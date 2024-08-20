import { StyleSheet, Text, View , ScrollView} from 'react-native'
import React from 'react'

export default function FlatCards() {
  return (
    <View>
         <Text style={styles.headingText}>Flat Cards</Text>
          <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.container}>
               <View style={[styles.card, styles.cardOne]}>
                   <Text>Red</Text>
               </View>
               <View style={[styles.card, styles.cardTwo]}>
                   <Text>Blue</Text>
               </View>
               <View style={[styles.card, styles.cardThree]}>
                   <Text>Voilet</Text>
               </View>
               <View style={[styles.card, styles.cardFour]}>
                   <Text>Voilet</Text>
               </View>
               <View style={[styles.card, styles.cardFive]}>
                   <Text>Voilet</Text>
               </View>
               <View style={[styles.card, styles.cardSix]}>
                   <Text>Voilet</Text>
               </View>
          </View>
          </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
    },
    headingText: {
        marginTop: 50,
        fontSize: 24,
        fontWeight: "bold",
        paddingHorizontal: 10
    },
    card: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
        
    },
    cardOne: {
        backgroundColor: "#FFBF78",
        
    },
    cardTwo: {
        backgroundColor: "#FFE9D0"

    },
    cardThree: {
        backgroundColor: "#FFFED3"

    },
    cardFour: {
        backgroundColor: "#FB773C"

    },
    cardFive: {
        backgroundColor: "#B0EBB4"

    },
    cardSix: {
        backgroundColor: "#F6F5F2"

    },
})