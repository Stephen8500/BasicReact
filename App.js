import { StatusBar } from 'expo-status-bar';
import React, {Component, useState, useEffect} from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import BottomTab from './BottomTab';


export default function App() {
  return (
    <NavigationContainer>
      <BottomTab/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    paddingTop: 40,
  },
});
