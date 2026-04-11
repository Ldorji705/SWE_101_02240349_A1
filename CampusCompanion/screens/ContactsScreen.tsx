// ContactsScreen.tsx
// This screen displays a list of important contacts using a FlatList.
// It is part of the Campus Companion app to help students access key contact information.

import { View, FlatList, StyleSheet } from 'react-native';
import { CONTACTS } from '../data/contacts';
import ContactItem from '../components/ContactItem';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../types/navigation';

// Props type for the ContactsScreen
type Props = {
  navigation: NativeStackNavigationProp<RootStackParamList>;
};

export default function ContactsScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      {/* Render a list of contacts */}
      <FlatList
        data={CONTACTS}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <ContactItem
            contact={item}
            onPress={() => navigation.navigate('ContactDetails', { contact: item })}
          />
        )}
      />
    </View>
  );
}

// Styles for the ContactsScreen
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#ffffff',
  },
});