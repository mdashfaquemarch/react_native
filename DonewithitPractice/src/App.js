import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './Screens/HomeScreen';
import AppButton from './components/Button/AppButton';
import ViewImageScreen from './Screens/ViewImageScreen';
import Card from './components/Card/Card';

export default function App() {
  return (
       <>

       <View style={{
        backgroundColor: "#f8f4f4",
        padding: 20,
        paddingTop: 100
       }}>

        <Card
         title="Red jacked for sale"
         subTitle="$100"
         image={require("./app/assets/jacket.jpg")}
        />

       </View>
       </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
