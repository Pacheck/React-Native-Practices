import React, { useState } from 'react';
import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Switch } from 'react-native'

const HomeScreen = ({ navigation }) => {
  const [isTrue, setIsTrue] = useState(false);
  const { width, height } = Dimensions.get('window');
  
  const toggleSwitch = () => setIsTrue(prevState => !prevState)

  return (
    <View style={styles.viewStyle} width={width} height={height}>

      <Switch 
       trackColor={{ false: "#767577", true: "#c8ccc9" }}
       thumbColor={isTrue ? "#09ab24" : "#f4f3f4"}
        onValueChange={toggleSwitch}
        value={isTrue}
      />

      <TouchableOpacity onPress={() => navigation.navigate('List')}>
        <Text style={styles.textStyle}> Go to List screen </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('About')}>
        <Text style={styles.textStyle}> Go to About screen </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Image')}>
        <Text style={styles.textStyle}> Go to Image screen </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Counter')}>
        <Text style={styles.textStyle}> Go to Counter screen </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Color')}>
        <Text style={styles.textStyle}> Go to Color screen </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Custom')}>
        <Text style={styles.textStyle}> Go to Custom Color screen </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Text')}>
        <Text style={styles.textStyle}>Go to Text screen</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Box')}>
        <Text style={styles.textStyle}>Go to Box screen</Text>
      </TouchableOpacity>
    </View>
  )

}


const styles = StyleSheet.create({
  textStyle: {
    color: 'black',
    fontSize: 25,
  },
  viewStyle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fefefe',
  }
})

export default HomeScreen;