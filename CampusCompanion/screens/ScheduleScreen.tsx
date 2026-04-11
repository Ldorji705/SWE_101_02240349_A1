// ScheduleScreen.tsx
// This screen displays a simple weekly class schedule using a ScrollView.
// It is part of the Campus Companion app to help students view their timetable.

import { ScrollView, Text, StyleSheet } from 'react-native';

export default function ScheduleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Weekly schedule displayed as a list of Text components */}
      <Text style={styles.day}>Monday: SWE</Text>
      <Text style={styles.day}>Tuesday: Mobile Dev</Text>
      <Text style={styles.day}>Wednesday: AI</Text>
    </ScrollView>
  );
}

// Styles for the ScheduleScreen
const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  day: {
    fontSize: 16,
    marginVertical: 8,
  },
});