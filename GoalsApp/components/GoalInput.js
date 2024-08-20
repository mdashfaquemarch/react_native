import { useState } from "react";
import { View, TextInput,
   StyleSheet , Button, 
   Modal, Image,
     
  } from "react-native";

function GoalInput(props) {

    const [text, setText] = useState("");
    
    function goalInputHandler(enteredText) {
            const t = enteredText.trim();
            if(t !== "") {
              setText(enteredText);
            }
      }

      function addGoalHandler() {
        if(text !== "") {
          props.onAddGoal(text);
        }
        setText("");
      }
  return (
    <Modal visible={props.showModal} animationType="slide" >
    <View style={styles.inputContainer}>
         <Image style={styles.image} source={require("../assets/images/goal.png")}/>
      <TextInput 
         style={styles.textInput}
         placeholder="Write your goals"
         onChangeText={goalInputHandler}
         value={text}
      />
      <View style={styles.buttonContainer}>
        <View style={styles.button}>
          <Button title="ADD GOAL" onPress={addGoalHandler} color='#b180f0'/>
        </View>
        <View style={styles.button}>
       <Button title="Cancel" onPress={props.onBack} color='#f31282'/>
        </View>
      </View>
    </View>
    </Modal>
  );
}

export default GoalInput;

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        padding: 16,
        backgroundColor: "#311b6b"
      },
      image: {
        width: 100,
        height: 100,
        margin: 20
      },
      textInput: {
        borderWidth: 1,
        borderColor: "#e4d0ff",
        backgroundColor:"#e4d0ff",
        color: "#120438",
        borderRadius: 6,
        width: "100%",
        padding: 16,
      },
      buttonContainer: {
         marginTop: 16,
         flexDirection: 'row'
      },
      button: {
        width: 100,
        marginHorizontal: 8
      }
})