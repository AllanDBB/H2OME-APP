import React from "react";
import { View, Text, StyleSheet, SafeAreaView, ScrollView } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffffff",
  },
  calendar: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#cccccc",
    alignItems: "center",
  },
  calendarText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#333333",
  },
  notesContainer: {
    flex: 1,
    padding: 20,
  },
  notesTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333333",
  },
  note: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    borderRadius: 8,
    marginBottom: 10,
  },
  noteText: {
    fontSize: 16,
    color: "#666666",
  },
});

const CalendarScreen: React.FC = () => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.calendar}>
        <Text style={styles.calendarText}>Calendar</Text>
      </View>
      <ScrollView style={styles.notesContainer}>
        <Text style={styles.notesTitle}> Important</Text>
        <View style={styles.note}>
          <Text style={styles.noteText}></Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}></Text>
        </View>
        <View style={styles.note}>
          <Text style={styles.noteText}></Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default CalendarScreen;
