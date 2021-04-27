import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

//creating a list of goals for this project
//clicking will delete goal
//plus button adds goal
//plus button opens modal for enter goal information

export default function App() {

  const [enteredGoal, setEnteredGoal] = useState('')
  const [courseGoals, setCourseGoals] = useState([])

  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText)
  }

  const addGoalHandler = () => {
    setCourseGoals([...setCourseGoals, courseGoals])
  }

  return (
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder="Course Goal"
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title="Add" onPress={addGoalHandler} />
      </View>
      <View>
      
      </View>
    </View>

    // <View style={{padding: 50, flexDirection: 'row', width: '80%', height: 300, justifyContent: 'space-around', alignItems: 'stretch'}}>
    //   <View
    //   style={{
    //     backgroundColor: 'red',
    //     flex: 1,
    //     // width: 100,
    //     // height: 100,
    //     justifyContent: 'center',
    //     alignItems: 'center'}}>
    //     <Text>1</Text>
    //   </View>

    //   <View
    //   style={{
    //     backgroundColor: 'blue',
    //     // width: 100,
    //     // height: 100,
    //     flex: 2,
    //     justifyContent: 'center',
    //     alignItems: 'center'}}>
    //     <Text>2</Text>
    //   </View>

    //   <View
    //   style={{
    //     backgroundColor: 'green',
    //     // width: 100,
    //     // height: 100,
    //     justifyContent: 'center',
    //     alignItems: 'center'}}>
    //     <Text>3</Text>
    //   </View>

    // </View>
  );
}

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
// });

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  input: {
    borderColor: "black",
    borderWidth: 1,
    padding: 10,
    width: "80%",
  }
});
