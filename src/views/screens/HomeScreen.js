import React, { useState, useEffect } from "react";
import { StatusBar } from "expo-status-bar";
import {
  View,
  SafeAreaView,
  ScrollView,
  // StatusBar,
  StyleSheet,
  Text,
  TextInput,
  ImageBackground,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import COLORS from "../../consts/colors";
import hotels from "../../consts/hotels";
import hotelHighlights from "../../consts/hotelHighlights";
import { DrawerActions } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import hotelAPI from "../../API/hotelAPI";

const { width } = Dimensions.get("screen");

const HomeScreen = ({ navigation }) => {
  const [dataHotel, setDataHotel] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const res = await hotelAPI.getAll();
        setDataHotel(res.data);
      } catch (error) {
        console.log("Error API Hotel", error);
      }
    };
    getData();
  }, []);

  const Card = ({ hotel }) => {
    return (
      <TouchableOpacity
        activeOpacity={0.8}
        onPress={() => navigation.navigate("DetailsScreen", hotel)}
      >
        <ImageBackground
          style={styles.cardImage}
          source={{ uri: hotel.tenMien }}
        >
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

  const RecommendedCard = ({ hotel }) => {
    return (
      <ImageBackground style={styles.rmCardImage} source={hotel.image}>
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
            {hotel.name}
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
                  {hotel.location}
                </Text>
              </View>
              <View style={{ flexDirection: "row" }}>
                <MaterialIcons style={styles.textShadow} name="star" size={22} color={COLORS.white} />
                <Text
                  style={[
                    styles.textShadow,
                    { color: COLORS.white, marginLeft: 5 },
                  ]}
                  size={22}
                >
                  5.0
                </Text>
              </View>
            </View>
            <Text style={{ color: COLORS.white, fontSize: 33 }}>
              {hotel.detail}
            </Text>
          </View>
        </View>
      </ImageBackground>
    );
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: COLORS.white,
      }}
    >
      {/* <StatusBar style="light" /> */}
      {/* <StatusBar
        translucent={false}
        backgroundColor={COLORS.sanMarino}
      /> */}
      <LinearGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={["#41DA", "#22a7f0"]}
        style={styles.header}
      >
        <MaterialIcons
          onPress={() => navigation.dispatch(DrawerActions.openDrawer())}
          name="sort"
          size={28}
          color={COLORS.white}
        ></MaterialIcons>
        <Text style={{ color: COLORS.white, fontWeight: "bold", fontSize: 20 }}>
          KMAHotel
        </Text>
        <MaterialIcons
          name="notifications-none"
          size={28}
          color={COLORS.white}
        ></MaterialIcons>
      </LinearGradient>
      <ScrollView showsVerticalScrollIndicator={false}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={["#41DA", "#22a7f0"]}
          style={{
            // backgroundColor: COLORS.sanMarino,
            height: 100,
            paddingHorizontal: 20,
            marginBottom: 40,
          }}
        >
          <View>
            <Text style={styles.headerTittle}>Tìm kiếm thêm</Text>
            <Text style={styles.headerTittle}>nhiều khách sạn khác</Text>
            <View style={styles.inputSearch}>
              <MaterialIcons name="search" size={28} />
              <TextInput
                placeholder="Tìm khách sạn"
                underlineColorAndroid="transparent"
                style={styles.textInput}
                autoCapitalize="none"
              />
            </View>
          </View>
        </LinearGradient>
        {/* <ListCategories /> */}
        <Text style={styles.sectionTittle}>Nổi bật </Text>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={hotelHighlights}
          contentContainerStyle={{ paddingLeft: 20, paddingBottom: 20 }}
          snapToInterval={width - 20}
          keyExtractor={() => Math.random().toString(36).substr(2, 9)}
          renderItem={({ item }) => <RecommendedCard hotel={item} />}
        />
        <Text style={styles.sectionTittle}>Khách sạn</Text>
        <View>
          <FlatList
            contentContainerStyle={{ paddingLeft: 20 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={dataHotel}
            keyExtractor={() => Math.random().toString(36).substr(2, 9)}
            renderItem={({ item }) => <Card hotel={item} />}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  header: {
    paddingTop: 50,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    // backgroundColor: COLORS.sanMarino,
  },
  backgroundColor: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  headerTittle: {
    fontSize: 21,
    fontWeight: "bold",
    color: COLORS.whiteT,
  },
  overlay: {
    flex: 1,
    padding: 10,
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: "#05375a",
    fontSize: 15,
  },
  textShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.5)",
    textShadowOffset: { width: -1, height: 1 },
    textShadowRadius: 10,
  },
  inputSearch: {
    position: "absolute",
    top: 70,
    width: "100%",
    height: 60,
    borderRadius: 10,
    flexDirection: "row",
    paddingHorizontal: 20,
    alignItems: "center",
    backgroundColor: COLORS.white,
    elevation: 12,
  },
  category: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 60,
    marginHorizontal: 20,
  },
  iconCategory: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    backgroundColor: COLORS.secondary,
  },
  sectionTittle: {
    fontSize: 20,
    fontWeight: "bold",
    marginHorizontal: 20,
    marginVertical: 20,
  },
  cardImage: {
    width: width / 2,
    height: 220,
    marginRight: 20,
    overflow: "hidden",
    borderRadius: 10,
  },
  imageOverlay: {
    flex: 1,
    padding: 10,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .1)",
  },
  rmCardImage: {
    width: width - 40,
    height: 200,
    marginRight: 20,
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default HomeScreen;
