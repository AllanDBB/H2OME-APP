import React from "react";
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
          // Aquí deberías manejar el estado y lógica para habilitar/deshabilitar notificaciones
          // value={isEnabled}
          // onValueChange={toggleSwitch}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Dark Mode</Text>
        <Switch
          trackColor={{ false: "#767577", true: "#81b0ff" }}
          thumbColor="#f4f3f4"
          ios_backgroundColor="#3e3e3e"
          // Aquí deberías manejar el estado y lógica para habilitar/deshabilitar el modo oscuro
          // value={isDarkModeEnabled}
          // onValueChange={toggleDarkMode}
        />
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Language</Text>
        <Text style={styles.settingText}>English</Text>
        {/* Aquí podrías añadir un selector de idioma */}
      </View>
      <View style={styles.setting}>
        <Text style={styles.settingText}>Version</Text>
        <Text style={styles.settingText}>1.0.0</Text>
        {/* Aquí podrías mostrar la versión de la aplicación */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  setting: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 15,
  },
  settingText: {
    fontSize: 18,
  },
});

export default SettingsScreen;
