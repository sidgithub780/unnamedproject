import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Loginscreen from '../screens/Loginscreen';
import Homescreen from '../screens/Homescreen';
import Userscreen from '../screens/Userscreen';

import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName='Home'
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;

          if (rn === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (rn === 'Login') {
            iconName = focused ? 'log-in' : 'log-in-outline';
          } else if (rn === 'User') {
            iconName = focused ? 'person' : 'person-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
      })}
    >
      <Tab.Screen
        name='Login'
        component={Loginscreen}
        options={{ tabBarStyle: { display: 'none' } }}
      />
      <Tab.Screen name='Home' component={Homescreen} />
      <Tab.Screen name='User' component={Userscreen} />
    </Tab.Navigator>
  );
};

export default TabNavigator;
