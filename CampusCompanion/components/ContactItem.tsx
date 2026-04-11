import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Contact } from '../types/navigation';
import { useState } from 'react';

type Props = {
  contact: Contact;
  onPress: () => void;
};

export default function ContactItem({ contact, onPress }: Props) {
  const [selected, setSelected] = useState(false);

  const handlePress = () => {
    setSelected(!selected);   // toggle highlight
    onPress();                // navigate to details
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      style={[
        styles.item,
        selected && styles.selectedItem   // dynamic style
      ]}
    >
      <Text style={styles.text}>{contact.name}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  item: {
    padding: 15,
    borderBottomWidth: 1,
    backgroundColor: '#fff'
  },
  selectedItem: {
    backgroundColor: '#d0e8ff'   // highlight color
  },
  text: {
    fontSize: 16
  }
});