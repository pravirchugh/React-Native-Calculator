import React, {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import NumberButton from './components/NumberButton.js'
import OperatorButton from './components/OperatorButton.js';

export default function App() {

  const [firstArgument, setFirstArgument] = useState("0")
  const [secondArgument, setSecondArgument] = useState("0")

  const [operator, setOperator] = useState(" ")

  const [displayValue, setDisplayValue] = useState("0")

  const [inProcess, setInProcess] = useState(false)

  return (

    <View style={styles.container}>

      <View style={styles.outputWindow}>
        <Text numberOfLines={1} ellipsizeMode="tail" style={{textAlign: "right", marginTop: 90, marginRight: 15, fontSize: 80, color: "white"}}>{displayValue}</Text>
      </View>

      <View style={styles.buttonColumn}>

        <View style={styles.buttonRow}>
          <OperatorButton text={"+/-"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"%"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"C"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"⌫"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
        </View>

        <View style={styles.buttonRow}>
          <OperatorButton text={"1/x"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"x²"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"√"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"÷"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
        </View>

        <View style={styles.buttonRow}>
          <NumberButton value={7} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <NumberButton value={8} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <NumberButton value={9} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <OperatorButton text={"*"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
        </View>

        <View style={styles.buttonRow}>
          <NumberButton value={4} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <NumberButton value={5} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <NumberButton value={6} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <OperatorButton text={"-"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
        </View>

      
        <View style={styles.buttonRow}>
          <NumberButton value={1} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <NumberButton value={2} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <NumberButton value={3} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <OperatorButton text={"+"} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
        </View>
    
        <View style={styles.buttonRow}>
          <NumberButton value={0} isZero={true} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess}></NumberButton>
          <OperatorButton text={"."} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
          <OperatorButton text={"="} firstArgument={firstArgument} setFirstArgument={setFirstArgument} secondArgument={secondArgument} setSecondArgument={setSecondArgument} displayValue={displayValue} setDisplayValue={setDisplayValue} inProcess={inProcess} setInProcess={setInProcess} operator={operator} setOperator={setOperator}></OperatorButton>
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
    paddingTop: 300,
    paddingBottom: 10,
    paddingLeft: 10,
    paddingRight: 10,
    borderColor: "yellow",
    borderRadius: 10
    
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
    width: 399,
    height: 200,
    // backgroundColor: "white"
    
  }
});
