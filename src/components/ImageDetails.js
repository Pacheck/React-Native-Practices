import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native'

const ImageDetails = ({ title, image, rating }) => {
    return <View>
        <Image source={image} />
        <Text>Images of {title}</Text>
        <Text>Image score: {rating}</Text>
    </View>
}

const styles = StyleSheet.create({});

export default ImageDetails;