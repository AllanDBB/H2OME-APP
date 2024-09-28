import React from "react";
import { View, Text, StyleSheet, TextInput, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#D4C2A6", // Mars-like background color
    paddingTop: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 20,
    textAlign: "center",
    color: "#BF4F1E", // Mars reddish tone
  },
  botMessage: {
    alignSelf: "flex-start",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "#13ABCB", // Bot message color
    maxWidth: "70%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  botText: {
    color: "#FFF",
    fontSize: 16,
  },
  userMessage: {
    alignSelf: "flex-end",
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
    backgroundColor: "#CC4A36", // User message color
    maxWidth: "70%",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  userText: {
    color: "#FFF",
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderTopWidth: 1,
    borderColor: "#BF4F1E", // Mars-like border color
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#FFF",
  },
  input: {
    flex: 1,
    borderWidth: 1,
    borderColor: "#BF4F1E", // Mars-like input border color
    borderRadius: 25,
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: "#FFF",
    color: "#081D33",
  },
  scrollView: {
    paddingHorizontal: 10,
    paddingBottom: 20,
  },
  introMessage: {
    marginTop: 10,
    textAlign: "center",
    color: "#BF4F1E",
    fontSize: 14,
    fontStyle: "italic",
  },
});

const Bot: React.FC = () => {
  return (
    <View style={styles.botMessage}>
      <Text style={styles.botText}>Hello! How can I assist you today?</Text>
    </View>
  );
};

const User: React.FC = () => {
  return (
    <View style={styles.userMessage}>
      <Text style={styles.userText}>I need some help with my health data.</Text>
    </View>
  );
};

const Input: React.FC = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.input}
        placeholder="Write a message..."
        placeholderTextColor="#BF4F1E"
        multiline={true}
        numberOfLines={3}
      />
    </View>
  );
};

const Chatbot: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Chat with H2OME</Text>
      <Text style={styles.introMessage}>
        Your virtual assistant for health management on Mars.
      </Text>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Bot />
        <User />
      </ScrollView>
      <Input />
    </View>
  );
};

export default Chatbot;
