import { StyleSheet, Text } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import Btn from '../components/Btn';
import { Ionicons } from '@expo/vector-icons';

const Loginscreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Loginscreen</Text>
      <Btn
        icon={<Ionicons name='apps-outline' />}
        text='login'
        desc='sheesh'
        onPress={() => {
          navigation.navigate('Home');
        }}
      />
    </Screen>
  );
};

export default Loginscreen;

const styles = StyleSheet.create({});
