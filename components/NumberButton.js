import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const NumberButton = ({ value, isZero, firstArgument, setFirstArgument, secondArgument, setSecondArgument, displayValue, setDisplayValue, inProcess, setInProcess}) => {
    const [count, setCount] = useState(0);
    const onPress = () => {
    
        console.log(displayValue + " " + firstArgument + " " + secondArgument)
        
       if(!inProcess){
    
        
        if(displayValue == "0" && firstArgument == "0"){
            

            console.log(1);
            setFirstArgument(value.toString());
            setDisplayValue(value.toString());

            
        } else {
            console.log(2);
            setFirstArgument(firstArgument + value.toString());
            setDisplayValue(displayValue + value.toString());
        }
        

        
       } else {
            if(secondArgument == "0"){
                console.log(3)
                setSecondArgument(value.toString());
                setDisplayValue(value.toString());
            } else {
                console.log(4)
                setSecondArgument(secondArgument + value.toString());
                setDisplayValue(displayValue + value.toString());
            }
            
       }

        setCount(prevCount => prevCount + 1);
    }

    const inlineTextStyle = {textAlign: "center", color: "white", fontWeight: "bold", fontSize: 16 }

    return (
       <>
            {
            
                !isZero && <TouchableOpacity style={styles.button} onPress={onPress}>
                    <Text style={inlineTextStyle}>{value}</Text>
                </TouchableOpacity>

            }

            {
                isZero && <TouchableOpacity style={styles.buttonZero} onPress={onPress}>
                    <Text style={inlineTextStyle}>{value}</Text>
                </TouchableOpacity>
            }
        </>
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
    buttonZero: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#233C6E',
        padding: 10,
        margin: 2, 
        // height: 100,
        width: 200,
        borderRadius: 20
    }
    
});

export default NumberButton;