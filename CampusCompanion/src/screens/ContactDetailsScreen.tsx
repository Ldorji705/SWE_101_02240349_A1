// ContactDetailsScreen.tsx
// This screen displays the details of a selected contact.
// It is part of the Campus Companion app to help students access contact information.

import { View, Text, StyleSheet } from 'react-native';
import { RouteProp } from '@react-navigation/native';
import { RootStackParamList } from '../../types/navigation';

// Props type for the ContactDetailsScreen
type Props = {
  route: RouteProp<RootStackParamList, 'ContactDetails'>;
};

export default function ContactDetailsScreen({ route }: Props) {
  const { contact } = route.params;

  return (
    <View style={styles.container}>
      {/* Display contact name and phone number */}
      <Text style={styles.name}>{contact.name}</Text>
      <Text style={styles.phone}>{contact.phone}</Text>
    </View>
  );
}

// Styles for the ContactDetailsScreen
const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: '#f9f9f9',
  },
  name: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  phone: {
    fontSize: 16,
    color: '#555',
  },
});