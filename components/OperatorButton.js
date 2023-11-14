import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OperatorButton = ({ text, firstArgument, setFirstArgument, secondArgument, setSecondArgument, displayValue, setDisplayValue, inProcess, setInProcess}) => {
    const [count, setCount] = useState(0);
    const onPress = () => {
        if(text == "C"){
            setDisplayValue(0);
            if(!inProcess){
                setFirstArgument(0);
            } else {
                setSecondArgument(0);
            }
        } else if(text == "⌫"){

            if(displayValue.length == 1){
                setDisplayValue(0);
                if(!inProcess){
                    setFirstArgument(0);
                } else {
                    setSecondArgument(0);
                }
            } else if(displayValue != 0){
                setDisplayValue(displayValue.substring(0,  displayValue.length - 1))
                if(!inProcess){
                    setFirstArgument(0);
                } else {
                    setSecondArgument(0);
                }
            } else if(displayValue == 0){
                setDisplayValue(0);
            }
        } else if(text == "+/-"){
            setDisplayValue((-1 * Number(displayValue)).toString());
            if(!inProcess){
                setFirstArgument(-1 * firstArgument);
            } else {
                setSecondArgument(-1 * secondArgument);
            }

        } else if(text == "."){
            setDisplayValue(displayValue + ".");
        } else if(text == "%"){
            setDisplayValue((0.01 * Number(displayValue)).toString());
            if(!inProcess){
                setFirstArgument(0.01 * firstArgument);
            } else {
                setSecondArgument(0.01 * secondArgument);
            }

        } else if(text == "1/x"){
            setDisplayValue((1 / Number(displayValue)).toString());
            if(!inProcess){
                setFirstArgument(1 / firstArgument);
            } else {
                setSecondArgument(1 / secondArgument);
            }
        }
        
        else {
            // Pressed some other operator
            
        }
    }

    

    const inlineTextStyle = {textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16 }

    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={inlineTextStyle}>{text}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    
    button: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#233C6E',
        padding: 10,
        margin: 2, 
        // height: 100,
        width: 100,
        borderRadius: 20
    },
    
});

export default OperatorButton;