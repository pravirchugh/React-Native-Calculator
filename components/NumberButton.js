import React, {useState} from 'react';
import { Button, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NumberButton = ({ value }) => {
    const [count, setCount] = useState(0);
    const onPress = () => setCount(prevCount => prevCount + 1);
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={{textAlign: "center", color: "white", }}>{value}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    
    button: {
        alignItems: 'center',
        backgroundColor: '#233C6E',
        padding: 10,
        margin: 2, 
        // height: 100,
        width: 100
    },
    
});

export default NumberButton;