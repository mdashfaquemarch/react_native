import { StyleSheet, Text, View, ScrollView } from 'react-native'
import React from 'react'

const ElevatedCards = () => {
  return (
    <View>
       <Text style={styles.headingText}>Elevated Cards</Text>
       <View style={styles.container}>
       <ScrollView  horizontal={true} showsHorizontalScrollIndicator={false}>
              <View style={[styles.card, styles.cardElevated]}>
                  <Text>Tap</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                  <Text>me</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                  <Text>to</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                  <Text>scroll</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                  <Text>more...</Text>
              </View>
              <View style={[styles.card, styles.cardElevated]}>
                  <Text>❤️</Text>
              </View>
       </ScrollView>
       </View>
    </View>
  )
}

export default ElevatedCards

const styles = StyleSheet.create({
    container: {
        padding: 8,
        flex: 1,
        flexDirection: "row"
    },
    headingText: {
        marginTop: 5,
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
        margin: 8
    },
    cardElevated: {
        backgroundColor: "#729762",
        elevation: 4,
        shadowOffset: {
            width:1,
            height:1
        },
        shadowColor: '#FB773C'
    }
})