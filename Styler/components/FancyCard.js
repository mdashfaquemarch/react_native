import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>Trending Places</Text>
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://images.unsplash.com/photo-1695395550316-8995ae9d35ff?q=80&w=2056&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Hawa Mahal</Text>
          <Text style={styles.cardLabel}>Pink City, Jaipur</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus
            sodales faucibus leo primis egestas suscipit velit. Libero nisi
            lacinia mus egestas nullam cubilia. Fringilla ad vivamus enim ex
          </Text>
          <Text style={styles.cardFooter}>12 mins away</Text>
        </View>
      </View>
      
      <View style={[styles.card, styles.cardElevated]}>
        <Image
          source={{
            uri: "https://plus.unsplash.com/premium_photo-1661919589683-f11880119fb7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.cardImage}
        />
        <View style={styles.cardBody}>
          <Text style={styles.cardTitle}>Red Fort</Text>
          <Text style={styles.cardLabel}>Delhi</Text>
          <Text style={styles.cardDescription}>
            Lorem ipsum odor amet, consectetuer adipiscing elit. Faucibus
            sodales faucibus leo primis egestas suscipit velit. Libero nisi
            lacinia mus egestas nullam cubilia. Fringilla ad vivamus enim ex
          </Text>
          <Text style={styles.cardFooter}>12 km away</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: "bold",
    paddingHorizontal: 10,
  },
  card: {
    width: 370,
    height: 370,
    borderRadius: 6,
    marginVertical: 12,
    marginHorizontal: 16,
    
  },
  cardElevated: {
    backgroundColor: "#F6F5F2",
    elevation: 2,
    shadowOffset: {
        height: 1,
        width: 1
    }
  },
  cardImage: {
    height: 190,
    width: "100%",
    borderTopRightRadius: 6,
    borderTopLeftRadius: 6
  },
  cardBody: {
    flex: 1,
    flexGrow: 1,
    marginTop:5,
    padding: 5
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#222",
    marginBottom: 5,
  },
  cardLabel: {
    fontSize: 14,
    color: "#666",
    marginBottom: 5,
  },
  cardDescription: {
    fontSize: 14,
    color: "#444",
    marginBottom: 13,
  },
  cardFooter: {
    fontSize: 12,
    color: "#888",
}
});
