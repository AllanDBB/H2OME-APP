import React from "react";
import {
  Image,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ImageBackground,
} from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import HomeScreen from "../pages/Home/Home";
import ProfileScreen from "../pages/Menu/Profile";
import SettingsScreen from "../pages/Menu/Settings";
import News from "../pages/Menu/News";
import Health from "../pages/Menu/Health";
import Chatbot from "../pages/Menu/Chatbot";
import Calendar from "../pages/Menu/Calendar";

const Drawer = createDrawerNavigator();

const DrawerNavigator = () => {
  const handleLogoPress = () => {
    console.log("Logo pressed");
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: styles.drawerStyle,
        headerTintColor: "#fff",
        headerTitleStyle: styles.headerTitle,
        headerStyle: { backgroundColor: "#C84B3B" }, // Hacer el fondo del header transparente
        drawerActiveTintColor: "orange",
        drawerLabelStyle: styles.drawerLabel,
        headerRight: () => (
          <TouchableOpacity onPress={handleLogoPress}>
            <Image
              source={require("./../../assets/logo.png")}
              style={styles.logo}
            />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="Chatbot" component={Chatbot} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Health" component={Health} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const styles = StyleSheet.create({
  drawerStyle: {
    backgroundColor: "#c84b20", // Color marrón rojizo para simular el paisaje marciano
    width: 250,
  },
  headerTitle: {
    fontWeight: "bold",
    color: "#fff", // Blanco para contrastar con el fondo
  },
  drawerLabel: {
    color: "#fff", // Color blanco para las etiquetas
    fontSize: 16,
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
});

export default DrawerNavigator;
