import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";

const ProfileScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          source={require("../../../assets/profile.jpg")} // Corrección aquí
          style={styles.profileImage}
        />
        <TouchableOpacity style={styles.editButton}>
          <Text style={styles.editButtonText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.profileDetails}>
        <View style={styles.column}>
          <Text style={styles.label}>Name:</Text>
          <Text style={styles.value}>John Doe</Text>
          <Text style={styles.label}>Age:</Text>
          <Text style={styles.value}>30 years</Text>
          <Text style={styles.label}>Gender:</Text>
          <Text style={styles.value}>Male</Text>
        </View>
        <View style={styles.column}>
          <Text style={styles.label}>Weight:</Text>
          <Text style={styles.value}>75 kg</Text>
          <Text style={styles.label}>Height:</Text>
          <Text style={styles.value}>180 cm</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  profileHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginRight: 20,
  },
  editButton: {
    backgroundColor: "#3498db",
    paddingVertical: 8,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  editButtonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  profileDetails: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  column: {
    flex: 1,
    alignItems: "flex-start",
  },
  label: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  value: {
    fontSize: 16,
    marginBottom: 10,
    color: "#666",
  },
});

export default ProfileScreen;
