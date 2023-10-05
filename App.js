import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import NumberButton from './components/NumberButton.js'

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.buttonColumn}>
      
        <View style={styles.buttonRow}>
          <NumberButton value={9}></NumberButton>
          <NumberButton value={8}></NumberButton>
          <NumberButton value={7}></NumberButton>
        </View>

        <View style={styles.buttonRow}>
          <NumberButton value={6}></NumberButton>
          <NumberButton value={5}></NumberButton>
          <NumberButton value={4}></NumberButton>
        </View>

      
        <View style={styles.buttonRow}>
          <NumberButton value={3}></NumberButton>
          <NumberButton value={2}></NumberButton>
          <NumberButton value={1}></NumberButton>
        </View>
    
      
      </View>
      <StatusBar style="auto" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 500,
    // paddingBottom: 100
    
  },
  buttonRow: {
    flex: 1,
    flexDirection: 'row'
  },
  buttonColumn: {
    flex: 1, 
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center'
  }
});
