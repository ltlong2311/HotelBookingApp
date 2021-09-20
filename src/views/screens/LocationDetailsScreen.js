import React from "react";
import {
  ImageBackground,
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  ScrollView,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import { StatusBar } from "expo-status-bar";

const LocationDetailsScreen = ({ navigation, route }) => {
  const location = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar style="light" />
      <ImageBackground style={{ flex: 1 }} source={{ uri: location.url }}>
        <View style={styles.overlay}>
          <View style={styles.header}>
            <MaterialIcons
              name="arrow-back-ios"
              size={28}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
            <MaterialIcons name="more-vert" size={28} color={COLORS.white} />
          </View>
          <View style={styles.imageDetails}>
            <Text
              style={{
                width: "70%",
                fontSize: 23,
                fontWeight: "bold",
                color: COLORS.white,
              }}
            >
              {location.name}
            </Text>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.locationList}>
       </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  iconSave: {
    position: "absolute",
    top: -20,
    right: 20,
    backgroundColor: COLORS.white,
    height: 50,
    width: 50,
    elevation: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  buy: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    height: 70,
    paddingHorizontal: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
    backgroundColor: COLORS.primary,
  },
  btnBook: {
    height: 40,
    width: 120,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  locationList: {
    flex: 2.5,
    top: -30,
    paddingTop: 20,
    paddingHorizontal: 20,
    backgroundColor: COLORS.white,
  },
  detailsContent: {
    marginBottom: -25,
  },
  header: {
    marginTop: 45,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  imageDetails: {
    position: "absolute",
    bottom: 20,
    padding: 23,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default LocationDetailsScreen;
