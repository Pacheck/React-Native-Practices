import React, { useReducer } from 'react';
import { View, Dimensions, TouchableOpacity } from 'react-native'

import UniqueColor from '../components/UniqueColor'
import  Reducer  from '../reducer/reducer';

const CustomColorScreen = () => {

    const [state, dispatch] = useReducer(Reducer, { red: 0, green: 0, blue: 0 });
    const { red, green, blue } = state;

    console.log(red, green, blue);

    return (
        <View style={
            {
                width: Dimensions.get('window').width,
                height: Dimensions.get('window').height - 60,
                
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: `rgb(${red}, ${green}, ${blue})`,
            }
        }>
            <UniqueColor colorName="red"  color={red} dispatch={dispatch} />
            <UniqueColor colorName="green"  color={green} dispatch={dispatch}/>
            <UniqueColor colorName="blue"  color={blue} dispatch={dispatch}/>
        </View>
    )


}

export default CustomColorScreen
