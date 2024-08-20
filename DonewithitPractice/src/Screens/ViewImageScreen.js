import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import colors from "../config/colors";

import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome from '@expo/vector-icons/FontAwesome';

export default function ViewImageScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.closeIcon}>
      <MaterialIcons name="close" size={35} color="white" />
      </View>
      <View style={styles.deleteIcon}>
      <FontAwesome name="trash" size={35} color="white" />
      </View>

      <Image
        resizeMode="contain"
        source={{
          uri: "https://images.unsplash.com/photo-1665407219935-f13387617461?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        }}
        style={styles.image}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },
  closeIcon: {
    position: "absolute",
    top: 50,
    left: 30,
  },
  deleteIcon: {
    position: "absolute",
    top: 50,
    right: 30,
  },
  image: {
    width: "100%",
    height: "100%"
  }
});
