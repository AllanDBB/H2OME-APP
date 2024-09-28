import React, { useState } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";

const SettingsScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Settings</Text>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Notifications</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#3e3e3e"
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#3e3e3e"
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Language</Text>
        <Text style={styles.settingText}>English</Text>
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Version</Text>
        <Text style={styles.settingText}>1.0.0</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#F3E6D3",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#081D33",
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#215E83",
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 18,
    color: "#081D33",
  },
});

export default SettingsScreen;
