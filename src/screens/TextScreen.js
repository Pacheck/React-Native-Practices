import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';

const TextScreen = () => {
    const [password, setPassword] = useState('');

    return <View>
        <Text>type your password: </Text>

        <TextInput 
            style={styles.input}
            autoCapitalize="none"
            autoCorrect={false}
            value={password}
            onChangeText={newPassword => setPassword(newPassword)}
        />

        {password.length < 5 ? <Text style={styles.password}>Your password must be 6 length at least</Text> : null}

    </View>
}

const styles = StyleSheet.create({
    input: {
        borderColor: 'black',
        borderWidth: 1,
    },
    password: {
        color: 'red'
    }
});

export default TextScreen;