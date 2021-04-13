import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";

//creating a list of goals for this project
//clicking will delete goal
//plus button adds goal
//plus button opens modal for enter goal information

export default function App() {

  return (
    <View style={{padding: 30}}>
      
      <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
        
        <TextInput placeholder="Course Goal" style={{borderColor: 'black', borderWidth: 1, padding: 10, width: '80%'}}/>
        <Button title="Add"/>
      </View>
      <View>

      </View>
    </View>
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
