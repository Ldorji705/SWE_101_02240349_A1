// HomeScreen.tsx
// This is the main screen of the Campus Companion app.
// It serves as the entry point and welcomes users to the app.

import { View, Text, StyleSheet } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* App title and welcome message */}
      <Text style={styles.title}>Campus Companion</Text>
      <Text style={styles.subtitle}>Welcome to CST App</Text>
    </View>
  );
}

// Styles for the HomeScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#555',
  },
});