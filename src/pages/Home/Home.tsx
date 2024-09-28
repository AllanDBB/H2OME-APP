import React from "react";
import { View, Text, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
});

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Hello World!</Text>
    </View>
  );
};

export default HomeScreen;
