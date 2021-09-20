import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../views/screens/HomeScreen";
import { StatusBar } from "expo-status-bar";
import DetailsScreen from "../views/screens/DetailsScreen";
import LocationScreen from "../views/screens/LocationScreen";
import LocationDetailsScreen from "../views/screens/LocationDetailsScreen";
import ForumScreen from "../views/screens/ForumScreen";

const Stack = createStackNavigator();
const screenOptionStyle = {
  headerShown: false,
};
const HomeStackNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
      </Stack.Navigator>
      <StatusBar style="light" />
    </>
  );
};
const LocationStackNavigator = () => {
  return (
    <>
      <Stack.Navigator screenOptions={screenOptionStyle}>
        <Stack.Screen name="LocationScreen" component={LocationScreen} />
        <Stack.Screen
          name="LocationDetails"
          component={LocationDetailsScreen}
        />
      </Stack.Navigator>
      <StatusBar style="light" />
    </>
  );
};
const ForumStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={screenOptionStyle}>
      <Stack.Screen name="ForumScreen" component={ForumScreen} />
    </Stack.Navigator>
  );
};

export {
  HomeStackNavigator,
  LocationStackNavigator,
  ForumStackNavigator,
};
