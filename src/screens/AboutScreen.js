import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const AboutScreen = () => {

    const myName = 'Bagug'

    return (
        <View>
            <Text style={styles.getStarted}>Getting started with React-Native</Text>
            <Text style={styles.nameStyle}>My name is {myName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    getStarted:{
        fontSize: 45
    },
    nameStyle: {
        fontSize: 20
    }
})

export default AboutScreen
