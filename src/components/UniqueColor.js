import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity, Dimensions } from 'react-native'

const UniqueColor = ({ colorName, color, dispatch }) => {

    const styles = StyleSheet.create({
        colorsLabel: {
            fontSize: 20,
        },
        colorButton: {
            width: Dimensions.get('window').width - 60,
            height: 50,
    
            marginBottom: 10,
    
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: handleBackgroundColor(),
        }
    })

    function handleBackgroundColor(){
        switch (colorName) {
            case 'red':
                return '#bf0808';
            case 'green':
                return '#06a10c';
            case 'blue':
                return '#0972b8';
            default:
                break;
        }
    }

    return <View>
        <Text style={styles.colorsLabel}>{colorName}</Text>
        <TouchableOpacity onPress={() => dispatch({ type: colorName, payload: 10 })} style={styles.colorButton}>
            <Text>More {colorName}</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => dispatch({ type: colorName, payload: -10 })} style={styles.colorButton}>
            <Text>Less {colorName}</Text>
        </TouchableOpacity>
    </View>
}


export default UniqueColor;