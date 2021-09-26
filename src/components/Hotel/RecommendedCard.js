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

const RecommendCard = ({ hotel, navigation }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      onPress={() => navigation.navigate("DetailsScreen", hotel)}
    >
      <ImageBackground
        style={styles.rmCardImage}
        source={{ uri: hotel.tenMien }}
      >
        <View style={styles.imageOverlay}>
          <Text
            style={[
              styles.textShadow,
              {
                color: COLORS.white,
                fontSize: 22,
                fontWeight: "bold",
                marginTop: 10,
              },
            ]}
          >
            {hotel.tenKS}
          </Text>
          <View
            style={{
              flex: 1,
              justifyContent: "space-between",
              alignItems: "flex-end",
            }}
          >
            <View
              style={{ width: "100%", flexDirection: "row", marginTop: 10 }}
            >
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons name="place" size={22} color={COLORS.white} />
                <Text
                  style={[
                    styles.textShadow,
                    { color: COLORS.white, marginLeft: 5 },
                  ]}
                  size={22}
                >
                  {hotel.diaDiem.tenDD}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons
                  style={styles.textShadow}
                  name="star"
                  size={22}
                  color={COLORS.white}
                />
                <Text
                  style={[
                    styles.textShadow,
                    { color: COLORS.white, marginLeft: 5 },
                  ]}
                  size={22}
                >
                  {hotel.rating}
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );
};

export default RecommendCard;

const styles = StyleSheet.create({
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  imageOverlay: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .15)",
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
});
