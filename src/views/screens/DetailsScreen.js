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

const DetailsScreen = ({ navigation, route }) => {
  const hotel = route.params;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.white }}>
      <StatusBar style="light" />
      <ImageBackground style={{ flex: 0.7 }} source={{ uri: hotel.tenMien }}>
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
              {hotel.tenKS}
            </Text>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="star" size={30} color={COLORS.orange} />
              <Text
                style={{
                  color: COLORS.white,
                  fontWeight: "bold",
                  fontSize: 20,
                  paddingTop: 4,
                  marginRight: -20,
                }}
              >
                {hotel.rating}
              </Text>
            </View>
          </View>
        </View>
      </ImageBackground>
      <View style={styles.detailsHotel}>
        <View style={styles.iconSave}>
          <MaterialIcons name="bookmarks" color={COLORS.primary} size={30} />
        </View>
        <View style={{ flexDirection: "row", marginTop: 0 }}>
          <MaterialIcons name="place" size={20} color={COLORS.primary} />
          <Text
            style={{
              marginLeft: 5,
              fontSize: 17,
              fontWeight: "bold",
              color: COLORS.primary,
            }}
          >
            {hotel.diaChi}
          </Text>
        </View>
        <Text
          style={{
            marginTop: 20,
            marginBottom: 10,
            fontWeight: "bold",
            fontSize: 20,
          }}
        >
          Thông tin khách sạn
        </Text>
        <ScrollView
          style={styles.detailsContent}
          showsVerticalScrollIndicator={false}
        >
          <Text style={{ marginTop: 10, lineHeight: 22 }}>{hotel.content}</Text>
        </ScrollView>
      </View>
      <View style={styles.buy}>
        <View style={{ flex: 1, flexDirection: "row", alignItems: "center" }}>
          <Text
            style={{ fontSize: 18, fontWeight: "bold", color: COLORS.orange }}
          >
            {hotel.email} VND
          </Text>
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: COLORS.white,
              marginLeft: 2,
            }}
          >
            /ngày
          </Text>
        </View>
        <View style={styles.btnBook}>
          <Text
            style={{ color: COLORS.primary, fontSize: 16, fontWeight: "bold" }}
          >
            Đặt ngay
          </Text>
        </View>
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
  detailsHotel: {
    flex: 0.7,
    top: -30,
    paddingTop: 20,
    paddingHorizontal: 20,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    backgroundColor: COLORS.white,
  },
  detailsContent: {
    marginBottom: -25,
  },
  header: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 15,
  },
  imageDetails: {
    position: "absolute",
    bottom: 30,
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
  },
});
export default DetailsScreen;
