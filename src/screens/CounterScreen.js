import React, { useReducer } from 'react'
import { View, Text, StyleSheet, Button } from 'react-native'

const INCREASE = 'Increase';
const DECREASE = 'Decrease';

const reducer = (state = 0, action) => {
    const { type, payload } = action;

    switch (type) {
        case INCREASE:
            return state + payload;
        case DECREASE:
            return state + payload;
        default:
            return state;
    }
}
 
const CounterScreen = () => {
    const [state, dispatch] = useReducer(reducer, 0)

    return (
        <View>
            <Text>Counter: {state}</Text>
            <Button title="Increase" onPress={() => dispatch({ type: 'Increase', payload: 1 })}/>
            <Button title="Decrease" onPress={() => dispatch({ type: 'Decrease', payload: -1 })}/>
        </View>
    )
}

const styles = StyleSheet.create({})

export default CounterScreen
