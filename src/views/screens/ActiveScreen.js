import React from "react";
import { SafeAreaView, StyleSheet, View, Text } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { StatusBar } from "expo-status-bar";
const ActiveScreen = () => {
  return (
    <SafeAreaView>
      <StatusBar style="light" />
      <View>
        <Text>Active</Text>
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({});
export default ActiveScreen;
