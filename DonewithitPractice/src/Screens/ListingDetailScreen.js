import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import AppText from "../components/AppText/AppText";
import colors from "../config/colors";

export default function ListingDetailScreen() {
  return (
    <View>
      <Image source={require("../assets/jacket.jpg")} style={styles.image} />
      <View style={styles.detailsContainer}>
        <AppText style={styles.title}>Red jacked for sale</AppText>
        <AppText style={styles.price}>$100</AppText>
        // implemening this 
        <ListItem
          image={require("../assets/mosh.jng")}
          title="Mosh"
          subTitle="5 Listings"
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    width: "100%",
    height: 300,
  },
  detailsContainer: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "500",
  },
  price: {
    color: colors.secondary,
    fontWeight: "bold",
    fontSize: 20,
    marginVertical: 10,
  },
});
