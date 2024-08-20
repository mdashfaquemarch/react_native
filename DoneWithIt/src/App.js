import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import WelcomeScreen from '../src/Screens/WelcomeScreen'
import ListingDetailsScreen from './Screens/ListingDetailsScreen'
import MessagesScreen from './Screens/MessagesScreen';
import ViewImageScreen from './Screens/ViewImageScreen';


export default function App()  {

  return (
    <>
      
      {/* <WelcomeScreen /> */}
      {/* <ListingDetailsScreen /> */}
      {/* <MessagesScreen /> */}
      <ViewImageScreen />

    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor:"#f8f4f4",
    padding: 20,
    paddingTop: 100
  },
});
