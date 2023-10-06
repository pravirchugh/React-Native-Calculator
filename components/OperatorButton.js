import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const OperatorButton = ({ text }) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);

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