import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../../../App";

type MainNavigationProp = StackNavigationProp<RootStackParamList, "Main">;

type Props = {
  navigation: MainNavigationProp;
};

const Main: React.FC<Props> = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate("Register");
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Mars!</Text>
      <Image
        source={require("./../../../assets/logo.png")}
        style={styles.image}
      />
      <TouchableOpacity onPress={handlePress} style={styles.button}>
        <Text style={styles.buttonText}>Start</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F3E6D3",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 28,
    marginBottom: 20,
    fontWeight: "bold",
    color: "#081D33",
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
    borderRadius: 15,
  },
  button: {
    backgroundColor: "#13ABCB",
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
    elevation: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default Main;
