import React from "react";
import { Image, StyleSheet, TouchableOpacity, View, Text } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Ionicons } from "@expo/vector-icons";
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
    // Aquí puedes mostrar la información que desees cuando se pulse el logo
    console.log("Logo pressed");
    return (
      <View>
        <Text>Some text</Text>
      </View>
    );
  };

  return (
    <Drawer.Navigator
      screenOptions={{
        drawerStyle: {
          width: 250,
        },
        headerTintColor: "#000",
        headerTitleStyle: {
          fontWeight: "bold",
        },
        drawerActiveTintColor: "blue",
        drawerLabelStyle: { color: "#111" },
        headerRight: () => (
          <TouchableOpacity onPress={handleLogoPress}>
            <Image
              source={require("./../../assets/logo.png")}
              style={{ width: 40, height: 40, marginRight: 10 }}
            />
            <Drawer.Screen name="Settings" component={SettingsScreen} />
          </TouchableOpacity>
        ),
      }}
    >
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="H2OME" component={Chatbot} />
      <Drawer.Screen name="News" component={News} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Health" component={Health} />
      <Drawer.Screen name="Calendar" component={Calendar} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
