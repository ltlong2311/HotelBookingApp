import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import {
  NavigationContainer,
  DarkTheme,
  LightTheme,
} from "@react-navigation/native";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import DrawerNavigator from "./src/navigation/DrawerNavigator";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";
import StartScreen from "./src/views/screens/StartScreen";
import HomeScreen from "./src/views/screens/HomeScreen";
import DetailsScreen from "./src/views/screens/DetailsScreen";
import LoginScreen from "./src/views/screens/LoginScreen";
import RegisterScreen from "./src/views/screens/RegisterScreen";
import PostDetails from "./src/views/screens/PostDetails";

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer style={[styles.container]} theme={LightTheme}>
      <StatusBar style="light" translucent backgroundColor="transparent"/>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen name="Home" component={DrawerNavigator} />
        <Stack.Screen name="DetailsScreen" component={DetailsScreen} />
        <Stack.Screen name="PostDetails" component={PostDetails} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>
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
