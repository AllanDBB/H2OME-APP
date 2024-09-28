import React from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  bot: {
    position: "absolute",
    top: 25,
    left: 25,
  },
  user: {
    position: "absolute",
    top: 50,
    right: 25,
  },
  message: {
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    backgroundColor: "lightgray",
  },
  input: {
    borderWidth: 0.5,
    top: 500,
    left: 25,
    borderRadius: 10,
    backgroundColor: "white",
    width: "88%",
    padding: 10,
    marginTop: 10,
  },
});

const Bot: React.FC = () => {
  return (
    <View style={styles.bot}>
      <Text>H2OME</Text>
      <View style={styles.message} />
    </View>
  );
};

const Input: React.FC = () => {
  return (
    <TextInput
      style={styles.input}
      placeholder="Write a message..."
      multiline={true}
      numberOfLines={3}
    />
  );
};

const User: React.FC = () => {
  return (
    <View style={styles.user}>
      <Text>USER</Text>
      <View style={styles.message} />
    </View>
  );
};

const Chatbot: React.FC = () => {
  return (
    <View>
      <Bot />
      <User />
      <Input />
    </View>
  );
};

export default Chatbot;
