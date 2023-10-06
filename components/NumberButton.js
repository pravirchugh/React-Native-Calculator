import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, StyleSheet, View } from 'react-native';

const NumberButton = ({ value, isZero }) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

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