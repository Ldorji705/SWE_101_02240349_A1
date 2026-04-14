import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreen';
import ContactsScreen from '../screens/ContactsScreen';
import ScheduleScreen from '../screens/ScheduleScreen';
import MapScreen from '../screens/MapScreen';
import { TabParamList } from '../../types/navigation';

// Import icons
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator<TabParamList>();

export default function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName: keyof typeof Ionicons.glyphMap;

          if (route.name === 'Home') iconName = 'home';
          else if (route.name === 'Contacts') iconName = 'call';
          else if (route.name === 'Schedule') iconName = 'calendar';
          else iconName = 'map';

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Contacts" component={ContactsScreen} />
      <Tab.Screen name="Schedule" component={ScheduleScreen} />
      <Tab.Screen name="Map" component={MapScreen} />
    </Tab.Navigator>
  );
}