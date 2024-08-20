import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

import Fontisto from "@expo/vector-icons/Fontisto";
import colors from "../config/colors";
import AppButton from "../components/Button/AppButton";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        {/* <Image source={require("../assets/log.png")} style={styles.image}/> */}
        <Fontisto name="netflix" size={110} color="red" />
        <Text style={styles.tagLine}>Sell What You Don't Need</Text>
      </View>

      <View style={styles.buttonContainer}>
        <AppButton title="login" onPress={() => console.log("Hello")} />
        <AppButton title="signup"  color="medium"  onPress={() => console.log("Hello")} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.black,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  logoContainer: {
    position: "absolute",
    top: 70,
    alignItems: "center",
  },
  tagLine: {
    fontSize: 20,
    fontWeight: "600",
    padding: 20,
    color: colors.white,
  },
  image: {
    width: 100,
    height: 100,
  },
  buttonContainer: {
    width: "100%",
    padding: 20,
  },
});
