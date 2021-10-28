import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

const BoxScreen = () => {
    return (
        <View style={styles.parentStyle}>
            <View style={styles.viewOneStyle}></View>
            <View style={styles.viewTwoStyle}></View>
            <View style={styles.viewThreeStyle}></View>
        </View>
    );
};

const styles = StyleSheet.create({
    parentStyle: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: 200
    },
    viewOneStyle: {
        backgroundColor: 'red',
        height: 50,
        width: 50
    },
    viewTwoStyle: {
        backgroundColor: 'purple',
        height: 50,
        width: 50,
        alignSelf: 'flex-end'
    },
    viewThreeStyle: {
        backgroundColor: 'green',
        height: 50,
        width: 50
    }
});

export default BoxScreen;
