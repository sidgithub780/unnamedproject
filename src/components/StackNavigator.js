import { createStackNavigator } from '@react-navigation/stack';

import Loginscreen from '../screens/Loginscreen';
import Homescreen from '../screens/Homescreen';
import Userscreen from '../screens/Userscreen';

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name='Login' component={Loginscreen} />
      <Stack.Screen name='Home' component={Homescreen} />
      <Stack.Screen name='User' component={Userscreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
