import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import NumberButton from './components/NumberButton.js'
import OperatorButton from './components/OperatorButton.js';

export default function App() {
  return (

    <View style={styles.container}>

      <View style={styles.outputWindow}>

      </View>

      <View style={styles.buttonColumn}>

        <View style={styles.buttonRow}>
          <OperatorButton text={"+/-"}></OperatorButton>
          <OperatorButton text={"%"}></OperatorButton>
          <OperatorButton text={"C"}></OperatorButton>
          <OperatorButton text={"⌫"}></OperatorButton>
        </View>

        <View style={styles.buttonRow}>
          <OperatorButton text={"1/x"}></OperatorButton>
          <OperatorButton text={"x²"}></OperatorButton>
          <OperatorButton text={"√"}></OperatorButton>
          <OperatorButton text={"/"}></OperatorButton>
        </View>

        <View style={styles.buttonRow}>
          <NumberButton value={7}></NumberButton>
          <NumberButton value={8}></NumberButton>
          <NumberButton value={9}></NumberButton>
          <OperatorButton text={"*"}></OperatorButton>
        </View>

        <View style={styles.buttonRow}>
          <NumberButton value={4}></NumberButton>
          <NumberButton value={5}></NumberButton>
          <NumberButton value={6}></NumberButton>
          <OperatorButton text={"-"}></OperatorButton>
        </View>

      
        <View style={styles.buttonRow}>
          <NumberButton value={1}></NumberButton>
          <NumberButton value={2}></NumberButton>
          <NumberButton value={3}></NumberButton>
          <OperatorButton text={"+"}></OperatorButton>
        </View>
    
        <View style={styles.buttonRow}>
          <NumberButton value={0} isZero={true}></NumberButton>
          <OperatorButton text={"."}></OperatorButton>
          <OperatorButton text={"="}></OperatorButton>
        </View>
      
      </View>
      <StatusBar style="auto" />

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1A1E31',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 500,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10
    
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
  },
  outputWindow: {
    width: 1000
  }
});
