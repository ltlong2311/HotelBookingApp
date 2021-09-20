import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  Text,
  Dimensions,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  TouchableHighlight,
} from "react-native";
import {
  Feather,
  FontAwesome,
  MaterialCommunityIcons,
  MaterialIcons,
} from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
// import LinearGradient from "react-native-linear-gradient";
import { LinearGradient } from "expo-linear-gradient";
import COLORS from "../../consts/colors";

const LoginScreen = ({ navigation }) => {
  const [data, setData] = React.useState({
    username: "",
    password: "",
    check_textInputChange: false,
    secureTextEntry: true,
  });

  const updateSecureTextEntry = () => {
    setData({
      ...data,
      secureTextEntry: !data.secureTextEntry,
    });
  };
  return (
    <>
      <SafeAreaView style={styles.container}>
        <ImageBackground
          style={{
            flex: 2,
            // height: Dimensions.get("window").height / 1.9,
            marginBottom: -30,
          }}
          source={require("../../assets/hotel23.jpg")}
        >
          <View style={styles.headerIcon}>
            <MaterialIcons
              name="arrow-back-ios"
              size={28}
              color={COLORS.white}
              onPress={navigation.goBack}
            />
          </View>
          <Text style={styles.textHeader}>Đăng nhập</Text>
          <View style={styles.overlay}></View>
        </ImageBackground>
        <View style={styles.footer}>
          <View style={styles.action}>
            <FontAwesome name="user" color={COLORS.primary} size={20} />
            <TextInput
              placeholder="Tài khoản"
              style={styles.textInput}
              autoCapitalize="none"
            />
          </View>
          <View style={styles.action}>
            <FontAwesome name="lock" color={COLORS.primary} size={20} />
            <TextInput
              placeholder="Mật khẩu"
              secureTextEntry={data.secureTextEntry ? true : false}
              style={styles.textInput}
              autoCapitalize="none"
            />
            <TouchableOpacity onPress={updateSecureTextEntry}>
              {data.secureTextEntry ? (
                <MaterialCommunityIcons name="eye-off" color="grey" size={20} />
              ) : (
                <MaterialCommunityIcons name="eye" color="grey" size={20} />
              )}
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row-reverse" }}>
            <Text style={{ color: "#343434", fontSize: 14 }}>
              Quên mật khẩu?
            </Text>
          </View>
          <TouchableOpacity
            actionOpacity={0.8}
            onPress={() => navigation.navigate("Home")}
          >
            <View style={styles.button}>
              <LinearGradient
                colors={["#08c4ed", "#41BEDA"]}
                style={styles.signIn}
              >
                <Text style={styles.textSign}>Đăng nhập</Text>
              </LinearGradient>
            </View>
          </TouchableOpacity>

          <View
            style={{
              marginTop: 20,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text style={{ color: COLORS.dark, fontSize: 14 }}>
              Chưa có tài khoản?
              <Text
                onPress={() => navigation.navigate("Register")}
                style={{ color: COLORS.blueN, fontSize: 14 }}
              >
                {" "}
                Đăng ký ngay
              </Text>
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  headerIcon: {
    marginTop: 60,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  textHeader: {
    bottom: 42,
    position: "absolute",
    paddingHorizontal: 25,
    color: COLORS.white,
    fontSize: 25,
    fontWeight: "bold",
  },
  footer: {
    flex: 1.5,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  overlay: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, .0)",
  },
  textFooter: {
    color: "#05375a",
    fontSize: 18,
  },
  tittle: {
    color: "#05375a",
    fontSize: 30,
    fontWeight: "bold",
  },
  action: {
    flexDirection: "row",
    marginTop: 10,
    marginBottom: 30,
    borderBottomWidth: 1,
    borderBottomColor: "#BFBBBB",
    paddingBottom: 5,
  },
  textInput: {
    flex: 1,
    paddingLeft: 5,
    color: "#05375a",
    fontSize: 18,
    marginTop: -3,
  },
  button: {
    alignItems: "center",
    marginTop: 40,
  },
  signIn: {
    width: "100%",
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flexDirection: "row",
  },
  textSign: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
});
