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
      <Text style={styles.title}>Welcome! </Text>
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
    backgroundColor: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  image: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
  },
});

export default Main;
