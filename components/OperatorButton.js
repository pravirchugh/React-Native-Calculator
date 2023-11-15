import React, { useState } from "react";
import { Button, Text, TouchableOpacity, StyleSheet } from "react-native";

const OperatorButton = ({
  text,
  firstArgument,
  setFirstArgument,
  secondArgument,
  setSecondArgument,
  displayValue,
  setDisplayValue,
  inProcess,
  setInProcess,
  operator,
  setOperator,
}) => {
  const [count, setCount] = useState(0);
  const onPress = () => {
    if (text == "C") {

      // full reset of computation
      
      setDisplayValue(0);
      setFirstArgument(0);
      setSecondArgument(0);
      setInProcess(false);
      
    } else if (text == "⌫") {
      if (displayValue.length == 1) {
        setDisplayValue(0);
        if (!inProcess) {
          setFirstArgument(0);
        } else {
          setSecondArgument(0);
        }
      } else if (displayValue != 0) {
        setDisplayValue(displayValue.substring(0, displayValue.length - 1));
        if (!inProcess) {
          setFirstArgument(0);
        } else {
          setSecondArgument(0);
        }
      } else if (displayValue == 0) {
        setDisplayValue(0);
      }
    } else if (text == "+/-") {
      setDisplayValue((-1 * Number(displayValue)).toString());
      if (!inProcess) {
        setFirstArgument(-1 * firstArgument);
      } else {
        setSecondArgument(-1 * secondArgument);
      }
    } else if (text == ".") {
      setDisplayValue(displayValue + ".");
      if (!inProcess) {
        setFirstArgument(firstArgument + ".");
      } else {
        setSecondArgument(secondArgument + ".");
      }
    } else if (text == "%") {
      setDisplayValue((0.01 * Number(displayValue)).toString());
      if (!inProcess) {
        setFirstArgument(0.01 * firstArgument);
      } else {
        setSecondArgument(0.01 * secondArgument);
      }
    } else if (text == "1/x") {
      setDisplayValue((1 / Number(displayValue)).toString());
      if (!inProcess) {
        setFirstArgument(1 / firstArgument);
      } else {
        setSecondArgument(1 / secondArgument);
      }
    } else if (text == "x²") {
      let temporaryValue = Number(displayValue) * Number(displayValue);

      if (temporaryValue <= Math.floor(temporaryValue) + 0.0000001) {
        // this accounts for a precision error
        temporaryValue = Math.floor(temporaryValue);
      }
      if (temporaryValue >= Math.ceil(temporaryValue) - 0.0000001) {
        // this accounts for a precision error
        temporaryValue = Math.ceil(temporaryValue);
      }

      setDisplayValue(temporaryValue.toString());
      if (!inProcess) {
        setFirstArgument(temporaryValue);
      } else {
        setSecondArgument(temporaryValue);
      }
    } else if (text == "√") {
      setDisplayValue(Math.sqrt(Number(displayValue)).toString());
      if (!inProcess) {
        setFirstArgument(firstArgument * firstArgument);
      } else {
        setSecondArgument(secondArgument * secondArgument);
      }
    } else {
      // Pressed one of the four following operators: + - * / OR =

      if (text == "=") {
        // EVALUATE
        setInProcess(false);
        let temporaryValue = 0;
        if (
          operator == "+" ||
          operator == "-" ||
          operator == "*" ||
          operator == "/"
        ) {
          switch (operator) {
            case "+":
              temporaryValue = parseFloat(firstArgument) + parseFloat(secondArgument);
              if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
              }
              if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
              }
              
              setDisplayValue(
                (
                  temporaryValue
                ).toString()
              );
              setFirstArgument(
                (
                  temporaryValue
                ).toString()
              );
              setSecondArgument(0);
              break;

            case "-":
              temporaryValue = parseFloat(firstArgument) - parseFloat(secondArgument);
              if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
              }
              if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
              }
              
              setDisplayValue(
                (
                  temporaryValue
                ).toString()
              );
              setFirstArgument(
                (
                  temporaryValue
                ).toString()
              );
              setSecondArgument(0);
              break;

            case "*":
              temporaryValue = parseFloat(firstArgument) * parseFloat(secondArgument);
              if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
              }
              if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
              }
              
              setDisplayValue(
                (
                  temporaryValue
                ).toString()
              );
              setFirstArgument(
                (
                  temporaryValue
                ).toString()
              );
              setSecondArgument(0);
              break;

            case "÷":
              temporaryValue = parseFloat(firstArgument) / parseFloat(secondArgument);
              if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
              }
              if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
              }
              
              setDisplayValue(
                (
                  temporaryValue
                ).toString()
              );
              setFirstArgument(
                (
                  temporaryValue
                ).toString()
              );
              setSecondArgument(0);
              break;

            default:
              break;
          }
        }
      } else {
        // text == one of the four operators. Now, we have two cases: either 5+6 = 11 + 3 = 14, or 5 + 6 + 3 = 14 (repeated ops)
          // case 1: inProcess = false before the second + is registered
          // case 2: inProcess = true before the second + is registered


        // regardless of which case, the current operator is always going to be the button pressed
        setOperator(text);
        
        if(!inProcess){ // case 1
          
          setInProcess(true);

          setSecondArgument(0);
          setFirstArgument(displayValue);
        } else { // case 2
          
          console.log(displayValue + " " + firstArgument + " " + secondArgument)
          // we want firstArgument to become => (firstArgument OPERATOR secondArgument)
          // secondArgument becomes 0
          // displayValue can become firstArgument, with inProcess still being true

          if(operator == "+"){

              // even here, we still should account for slight rounding errors
              temporaryValue = parseFloat(firstArgument) + parseFloat(secondArgument);
              if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
              }
              if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
                // this accounts for a precision error
                temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
              }

              setFirstArgument(temporaryValue);
              setDisplayValue(temporaryValue);
              setSecondArgument(0);

          } else if(operator == "-"){
            // even here, we still should account for slight rounding errors
            temporaryValue = parseFloat(firstArgument) - parseFloat(secondArgument);
            if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
              // this accounts for a precision error
              temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
            }
            if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
              // this accounts for a precision error
              temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
            }

            setFirstArgument(temporaryValue);
            setDisplayValue(temporaryValue);
            setSecondArgument(0);
          } else if(operator == "*"){
            // even here, we still should account for slight rounding errors
            temporaryValue = parseFloat(firstArgument) * parseFloat(secondArgument);
            if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
              // this accounts for a precision error
              temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
            }
            if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
              // this accounts for a precision error
              temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
            }

            setFirstArgument(temporaryValue);
            setDisplayValue(temporaryValue);
            setSecondArgument(0);
          } else { // division
            // even here, we still should account for slight rounding errors
            temporaryValue = parseFloat(firstArgument) / parseFloat(secondArgument);
            if (temporaryValue * 1000 <= Math.floor(temporaryValue * 1000) + 0.0000001) {
              // this accounts for a precision error
              temporaryValue = Math.floor(temporaryValue * 1000) / 1000;
            }
            if (temporaryValue * 1000 >= Math.ceil(temporaryValue * 1000) - 0.0000001) {
              // this accounts for a precision error
              temporaryValue = Math.ceil(temporaryValue * 1000) / 1000;
            }

            setFirstArgument(temporaryValue);
            setDisplayValue(temporaryValue);
            setSecondArgument(0);
          }

        }
      }
    }
  };

  const inlineTextStyle = {
    textAlign: "center",
    color: "white",
    fontWeight: "bold",
    fontSize: 20,
  };

  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={inlineTextStyle}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#233C6E",
    padding: 10,
    margin: 2,
    // height: 100,
    width: 100,
    borderRadius: 20,
  },
});

export default OperatorButton;
