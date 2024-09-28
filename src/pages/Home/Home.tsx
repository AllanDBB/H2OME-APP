import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons"; // For icons

const HomeScreen = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Welcome to Mars!</Text>
        <Text style={styles.subtitle}>
          Embrace the future of survival and sustainability on Yaku Mars.
        </Text>
      </View>

      {/* News Card */}
      <View style={styles.card}>
        <Ionicons name="newspaper-outline" size={40} color="#EFBFBA" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Recent News</Text>
          <Text style={styles.cardText}>
            Stay informed with the latest health and wellness news.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>See more</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Health Status Card */}
      <View style={styles.card}>
        <Ionicons name="heart-outline" size={40} color="#FF8C00" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Health Status</Text>
          <Text style={styles.cardText}>
            Your current heart rate is 75 bpm. All is well!
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>View details</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Calendar Card */}
      <View style={styles.card}>
        <Ionicons name="calendar-outline" size={40} color="#0981B2" />

        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Activity Calendar</Text>
          <Text style={styles.cardText}>
            You have 2 medical appointments this week.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>View calendar</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Profile Card */}
      <View style={styles.card}>
        <Ionicons name="person-outline" size={40} color="#DABBA6" />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Your Profile</Text>
          <Text style={styles.cardText}>
            Update your personal information and preferences.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>View profile</Text>
          </TouchableOpacity>
        </View>
      </View>

      {/* Chatbot Card */}
      <View style={styles.card}>
        <Ionicons
          name="chatbubble-ellipses-outline"
          size={40}
          color="#8A3B3B"
        />
        <View style={styles.cardContent}>
          <Text style={styles.cardTitle}>Virtual Assistant</Text>
          <Text style={styles.cardText}>
            Need help? Chat with our virtual assistant.
          </Text>
          <TouchableOpacity style={styles.cardButton}>
            <Text style={styles.cardButtonText}>Chat now</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#D8B4A0", // Martian background color
  },
  header: {
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#F5F5F5", // Light text
    marginBottom: 5,
    fontFamily: "Orbitron", // Futuristic font
  },
  subtitle: {
    fontSize: 16,
    color: "#F5F5F5", // Light text
    fontFamily: "Orbitron",
  },
  card: {
    backgroundColor: "#C84B3B", // Martian card color
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
    flexDirection: "row",
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.2,
    shadowRadius: 10,
    elevation: 5,
  },
  cardContent: {
    marginLeft: 15,
    flex: 1,
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#FFFFFF", // Card title in white
    marginBottom: 5,
  },
  cardText: {
    fontSize: 14,
    color: "#F5F5F5", // Softer card text
    marginBottom: 10,
  },
  cardButton: {
    alignSelf: "flex-start",
    backgroundColor: "#FF8C00", // Bright button color
    paddingHorizontal: 15,
    paddingVertical: 8,
    borderRadius: 5,
  },
  cardButtonText: {
    color: "#F3E6D3", // Button text color
    fontWeight: "bold",
    fontSize: 14,
  },
});

export default HomeScreen;
