import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//creating a list of goals for this project
//clicking will delete goal
//plus button adds goal
//plus button opens modal for enter goal information

export default function App() {
  // const [outputText, setOutputText] = useState(
  //   "Open up App.js to start working on your app!"
  // );

  return (
    <View style={styles.container}>
      {/* <Text>{outputText}</Text>
      <Button
        title="Change Text"
        onPress={() => setOutputText("The text changed!")}
      /> */}
      <Text>Text error will show if no Text Component</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
