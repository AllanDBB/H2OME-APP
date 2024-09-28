import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

const HealthDataScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <DataItem label="Heart Rate" value="75 bpm" icon="heartbeat" />
        <DataItem label="Hemoglobin" value="14.5 g/dL" icon="tint" />
        <DataItem label="Sleep Hours" value="7.5 hours" icon="bed" />
        <DataItem label="Blood Pressure" value="120/80 mmHg" icon="medkit" />
        <DataItem
          label="Stress Level"
          value="Moderate"
          icon="exclamation-triangle"
        />
      </View>
    </View>
  );
};

type DataItemProps = {
  label: string;
  value: string;
  icon: string; // Añadido el icono como prop
};

const DataItem: React.FC<DataItemProps> = ({ label, value, icon }) => {
  return (
    <View style={styles.itemContainer}>
      <Icon name={icon} size={30} color="#BF4F1E" style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.label}>{label}</Text>
        <Text style={styles.value}>{value}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    backgroundColor: "#D8B4A0",
  },
  dataContainer: {
    width: "100%",
    paddingHorizontal: 20,
    borderRadius: 15,
    backgroundColor: "#fff", // Fondo blanco para la sección de datos
    padding: 20,
    shadowColor: "#000", // Sombra para dar un efecto de tarjeta
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5, // Elevación para Android
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#e0e0e0", // Color más suave para el borde
  },
  textContainer: {
    flex: 1,
    marginLeft: 10, // Espacio entre el icono y el texto
  },
  icon: {
    // Puedes ajustar el estilo del icono aquí si lo deseas
  },
  label: {
    fontSize: 18,
    fontWeight: "600", // Peso de fuente más ligero
    color: "#333",
  },
  value: {
    fontSize: 18,
    fontWeight: "500", // Peso de fuente más ligero para el valor
    color: "#666",
  },
});

export default HealthDataScreen;
