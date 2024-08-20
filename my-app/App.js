
import {SafeAreaView,StyleSheet, Text, View ,Image, Button} from 'react-native';

export default function App() {
  return (

    <SafeAreaView style={styles.container}>
      <Text>Hello Everyone</Text>
      <Image source={{
        uri: "https://picsum.photos/200/300"
      }} style = {styles.image} />
      <Button  color="orange"
       title='click me' onPress={() => console.log('pressed')}/>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: "center",
    alignItems: "center"
  },
  image: {
    width: 200,
    height: 300
  }
});
