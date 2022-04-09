import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import Screen from '../components/Screen';
import Btn from '../components/Btn';
import { Ionicons } from '@expo/vector-icons';

const Homescreen = ({ navigation }) => {
  return (
    <Screen>
      <Text>Homescreen</Text>
      <Btn
        icon={<Ionicons name='apps-outline' />}
        text='Logout'
        desc='sheesh'
        onPress={() => {
          navigation.navigate('Login');
        }}
      />
    </Screen>
  );
};

export default Homescreen;

const styles = StyleSheet.create({});
