import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button } from "react-native";

//creating a list of goals for this project
//clicking will delete goal
//plus button adds goal
//plus button opens modal for enter goal information

export default function App() {

  return (
    <View style={styles.container}>
      
      <View>
        <Text></Text>
        <Button title=""/>
      </View>
      <View>

      </View>
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
