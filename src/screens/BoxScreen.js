import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Box = () => {
    return <View style={styles.parent}>
        <View style={styles.box1}></View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
    </View>
}

const styles = StyleSheet.create({
    parent: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    box1: {
        width: 100,
        height: 100,
        backgroundColor: '#9312dd'
    },
    box2: {
        width: 100,
        height: 100,
        backgroundColor: '#22ffeeee',
        top: 100,
    },
    box3: {
        width: 100,
        height: 100,
        backgroundColor: '#555ffeec'
    }
});

export default Box;