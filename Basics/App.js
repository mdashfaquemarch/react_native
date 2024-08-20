import React from 'react';
import {Text, StyleSheet, useColorScheme, View,} from 'react-native';

const App = () => {
  const colorScheme = useColorScheme() === "dark";
  return (
  
    <View style={styles.container}>
      <Text style={colorScheme ? styles.darkText: styles.darkText}>hello</Text>
    </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  whiteText: {
    color: "#FFFFFF"
  },
  darkText: {
    color: "#000000"
  }

});

export default App;