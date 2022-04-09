import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './components/StackNavigator';
import TabNavigator from './components/TabNavigator';

const App = () => {
  return (
    <NavigationContainer>
      <StatusBar style='auto' />
      <TabNavigator />
    </NavigationContainer>
  );
};

export default App;
