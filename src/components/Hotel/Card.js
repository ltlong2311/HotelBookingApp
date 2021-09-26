import React from "react";
import {
  View,
  StyleSheet,
  Text,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";

const { width } = Dimensions.get("screen");

const Card = ({ hotel, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen", hotel)}
    >
      <ImageBackground style={styles.cardImage} source={{ uri: hotel.tenMien }}>
        <View style={styles.overlay}>
          <Text
            style={{
              color: COLORS.white,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            {hotel.tenKS}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              flexDirection: "row",
              alignItems: "flex-end",
            }}
          >
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="place" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {hotel.diaDiem.tenDD}
              </Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star" size={20} color={COLORS.white} />
              <Text style={{ marginLeft: 5, color: COLORS.white }}>
                {hotel.rating}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default Card;

const styles = StyleSheet.create({
  cardImage: {
    width: width / 2,
    height: 220,
    marginRight: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
});
