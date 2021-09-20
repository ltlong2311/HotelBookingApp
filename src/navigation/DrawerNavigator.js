import React from "react";
import { createDrawerNavigator, DrawerActions} from "@react-navigation/drawer";
import { DrawerContent } from "../components/DrawerContent";
import LoginScreen from "../views/screens/LoginScreen";
import BottomTabNavigator from "./BottomTabNavigator";
import HomeScreen from "../views/screens/HomeScreen";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator screenOptions={{ headerShown: false }} drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Main" component={BottomTabNavigator} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;


