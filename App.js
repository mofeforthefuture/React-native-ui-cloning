import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Piggy from './app/screens/Piggy';
import WelcomeBack from './app/screens/WelcomeBack';



export default function App() {
  return (
    <>
      <WelcomeBack />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
