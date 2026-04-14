// MapScreen.tsx
// This screen provides a link to the campus map.
// It is part of the Campus Companion app to help students navigate the campus.

import { View, Text, Button, Linking, StyleSheet } from 'react-native';

export default function MapScreen() {
  return (
    <View style={styles.container}>
      {/* Display campus map title and a button to open the map */}
      <Text style={styles.title}>Campus Map</Text>
      <Button title="Open Map" onPress={() => Linking.openURL('https://maps.google.com')} />
    </View>
  );
}

// Styles for the MapScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});