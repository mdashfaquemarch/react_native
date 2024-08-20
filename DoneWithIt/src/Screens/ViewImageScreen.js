import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";

import {MaterialCommunityIcons} from '@expo/vector-icons'

import colors from "../config/colors.js";

export default function ViewImageScreen() {
  return (
    <>
      <StatusBar style="light"/>
      <View style={styles.container}>
        <View style={styles.closeIcon}>
          <MaterialCommunityIcons name="close" color="white" size={35}/>
        </View>
        <View style={styles.deleteIcon}>
        <MaterialCommunityIcons name="trash-can-outline" color="white" size={35}/>
        </View>
        <Image
          resizeMode="contain"
          source={{
            uri: "https://images.unsplash.com/photo-1665407219935-f13387617461?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
          }}
          style={styles.image}
        />
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
  },

  image: {
    width: "100%",
    height: "100%",
  },
  closeIcon: {
    position: "absolute",
    top: 40,
    left: 30,
    
  },
  deleteIcon: {

    position: "absolute",
    top: 40,
    right: 30,
  
  },
});
