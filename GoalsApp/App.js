import { useState } from "react";
import { StyleSheet, View, FlatList , Button} from "react-native";
import { StatusBar } from "expo-status-bar";

import GoalItem from "./components/GoalItem.js";
import GoalInput from "./components/GoalInput.js";

export default function App() {
  const [modelIsVisible,setModelIsVisible] = useState(false);
  const [goals, setGoals] = useState([]);


  function startAddGoalHandler() {
    setModelIsVisible(true)
  }

  function endAddGoalHandler() {
    setModelIsVisible(false)
  }

  function addGoalHandler(enteredText) {
    setGoals((currentGoals) => [
      ...currentGoals,
      { text: enteredText, id: Math.random().toString() },
    ]);
    endAddGoalHandler();
  }

  

  function deleteGoalHandler(id) {
    setGoals(currentGoals => {
      return currentGoals.filter((goals) => goals.id !== id);
    })
  }

  return (
    <>
    <StatusBar style="light"/>
    <View style={styles.appContainer}>
       <Button 
       title="Add New Goal"
        color="#a065ec"
         onPress={startAddGoalHandler}
         
         />

       <GoalInput onAddGoal={addGoalHandler} showModal={modelIsVisible} onBack={endAddGoalHandler}/>
      <View style={styles.goalsContainer}>
        <FlatList
          data={goals}
          renderItem={(itemData) => {
            return <GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.id}/>;
          }}
          keyExtractor={(item, index) => {
            return item.id;
          }}
          alwaysBounceVertical={true}
        />
      </View>
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 16,
    backgroundColor: "#1e085a"
  },

  goalsContainer: {
    flex: 5,
  },
});
