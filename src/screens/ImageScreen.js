import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

import ImageDetails from '../components/ImageDetails';

import Beach from "../assets/beach.jpg";
import Forest from "../assets/forest.jpg";
import Mountain from "../assets/mountain.jpg";

const ImageScreen = () => {

    return (
        <View>
            <ImageDetails title="beach" image={Beach} rating="9.5"/>
            <ImageDetails title="forest" image={Forest} rating="9"/>
            <ImageDetails title="mountain" image={Mountain} rating="10"/>
        </View>
    )
}

const styles = StyleSheet.create({});

export default ImageScreen;