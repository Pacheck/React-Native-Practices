import React from 'react';
import { Text, View, FlatList, StyleSheet } from 'react-native'

const List = () => {

    const people = 
    [
        { name: 'Person 1', age: '23' },
        { name: 'Person 2', age: '34' },
        { name: 'Person 3', age: '65' },
        { name: 'Person 4', age: '24' },
        { name: 'Person 5', age: '12' },
        { name: 'Person 6', age: '38' },
        { name: 'Person 7', age: '11' },
        { name: 'Person 8', age: '42' },
        { name: 'Person 9', age: '65' },
        { name: 'Person 10', age: '95' },
    ]

    return (
        <View>
            <FlatList
            showsHorizontalScrollIndicator={false} 
            data={people}
            keyExtractor={person => person.name}
            renderItem={({item}) => {
                return <Text style={styles.textStyle}> {item.name} - {item.age}</Text>
            }}
            />
        </View>
    )

}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 50,
        fontSize: 25
    }
})

export default List;