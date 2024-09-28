import React from "react";
import { View, Text, StyleSheet } from "react-native";

const HealthDataScreen: React.FC = () => {
  return (
    <View style={styles.container}>
      <View style={styles.dataContainer}>
        <DataItem label="Heart Rate" value="75 bpm" />
        <DataItem label="Hemoglobin" value="14.5 g/dL" />
        <DataItem label="Sleep Hours" value="7.5 hours" />
        <DataItem label="Blood Pressure" value="120/80 mmHg" />
        <DataItem label="Stress Level" value="Moderate" />
      </View>
    </View>
  );
};

type DataItemProps = {
  label: string;
  value: string;
};

const DataItem: React.FC<DataItemProps> = ({ label, value }) => {
  return (
    <View style={styles.itemContainer}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  dataContainer: {
    width: "100%",
    paddingHorizontal: 20,
  },
  itemContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  label: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  value: {
    fontSize: 18,
    color: "#666",
  },
});

export default HealthDataScreen;
