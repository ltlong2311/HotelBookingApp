import React from "react";
import { SafeAreaView, StyleSheet, View, Text, StatusBar } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";

const ForumScreen = () => {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView>
        <View>
          <Text>New screen</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({});
export default ForumScreen;
