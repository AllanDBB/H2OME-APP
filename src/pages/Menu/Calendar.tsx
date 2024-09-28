import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";
import { Calendar } from "react-native-calendars";
import Icon from "react-native-vector-icons/FontAwesome";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  calendarContainer: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#dddddd",
    backgroundColor: "#ffffff",
    elevation: 3,
    borderRadius: 10,
  },
  calendar: {
    borderRadius: 10,
  },
  calendarText: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#343a40",
    textAlign: "center",
    marginBottom: 10,
  },
  notesContainer: {
    flex: 1,
    padding: 20,
  },
  notesTitle: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 15,
    color: "#343a40",
  },
  note: {
    backgroundColor: "#ffffff",
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: "#dddddd",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
    flexDirection: "row",
    alignItems: "center", // Alinear icono y texto
  },
  noteText: {
    fontSize: 16,
    color: "#495057",
    marginLeft: 10, // Espacio entre el icono y el texto
  },
  icon: {
    color: "#BF4F1E",
  },
});

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendarContainer}>
        <Text style={styles.calendarText}>Calendar</Text>
        <Calendar
          style={styles.calendar}
          markedDates={{
            "2024-09-30": {
              selected: true,
              marked: true,
              selectedColor: "#3498db",
            },
          }}
        />
      </View>
      <ScrollView style={styles.notesContainer}>
        <Text style={styles.notesTitle}>Important Notes</Text>
        <View style={styles.note}>
          <Icon name="calendar" size={20} style={styles.icon} />
          <Text style={styles.noteText}>Meeting at 10 AM</Text>
        </View>
        <View style={styles.note}>
          <Icon name="stethoscope" size={20} style={styles.icon} />
          <Text style={styles.noteText}>Doctor's appointment at 3 PM</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
