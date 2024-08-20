import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from "react-native";
import React from "react";

export default function ActionCard() {
  function openWebsite(websiteLink) {
    Linking.openURL(websiteLink);
  }

  return (
    <View>
      <Text style={styles.headingText}>Blog Card</Text>
      <View style={[styles.card, styles.elevatedCard]}>
        <View style={styles.headingContainer}>
          <Text style={styles.headerText}>
            What's new in Javascript 21 - ES12
          </Text>
        </View>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.cardImage}
        />
        <View style={styles.bodyContainer}>
          <Text numberOfLines={3}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Leo auctor
            turpis dis at netus ut rutrum taciti. Amet penatibus interdum quis
            nullam cubilia adipiscing libero habitasse augue. Donec lacus
            dictumst sit est tortor in himenaeos sapien ad. Semper vulputate
            tincidunt metus, lobortis cras lacus arcu! Nostra sit lacinia ad,
            fusce ligula vulputate. Fames suscipit est mattis, potenti non erat.
          </Text>
        </View>
        <View style={styles.footerContainer}>
           <TouchableOpacity
            onPress={() => openWebsite("https://docs.chaicode.com")}
           >
              <Text style={styles.socialLinks}>Read More</Text>
           </TouchableOpacity>
           <TouchableOpacity
            onPress={() => openWebsite("https://docs.chaicode.com")}
           >
              <Text style={styles.socialLinks}>Follow me</Text>
           </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 8
  },
  card: {
    width: 360,
    height: 370,
    borderRadius: 10,
    marginVertical: 12,
    marginHorizontal:16
  },
  headerText: {
    fontSize: 16,
    fontWeight: "600"
  },
  elevatedCard: {
    backgroundColor: "#FFAF00",
    elevation: 4,
  },
  headingContainer: {
     height: 40,
     flexDirection: "row",
     justifyContent: "center",
     alignItems: "center"
  },
  cardImage: {
    height: 200,
  },
  bodyContainer: {
    padding: 10
  },
  footerContainer: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center"
  },
  socialLinks:{
    fontSize: 16,
     backgroundColor: "#ffffff",
     paddingHorizontal: 20,
     paddingVertical: 6,
     borderRadius: 6
  }
});
