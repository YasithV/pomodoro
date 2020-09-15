import { StatusBar } from "expo-status-bar";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import TopIcons from "./TopIcons.js";
import Timer from "./timer.js";
import ToDo from "./Components/todo.js";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";

const RootStack = createStackNavigator();
export default function App() {
  return (
    <View>
      <View style={styles.topicons}>
        <TouchableOpacity
          onPress={() => this.props.navigation.navigate("Profile")}
        >
          <TopIcons name="notes" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Hello, world!")}>
          <TopIcons name="settings" />
        </TouchableOpacity>
      </View>

      <View style={styles.container}>
        <Text style={{ fontSize: 50 }}></Text>
        <Timer interval={30} />
        <StatusBar style="auto" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  topicons: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
});
