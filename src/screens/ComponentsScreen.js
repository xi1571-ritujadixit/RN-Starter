import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const ComponentsScreen = () => {
    const name = 'Stephen';
    return (
        <View>
            <Text style={styles.textStyle}>Getting started with React Native!</Text>
            <Text style={styles.fontSize20}>My name is {name}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    textStyle: {
        fontSize: 45
    },
    fontSize20: {
        fontSize: 20
    }
});

export default ComponentsScreen;
