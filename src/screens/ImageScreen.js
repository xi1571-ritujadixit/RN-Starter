import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import ImageDetails from '../components/ImageDetail';

const ImageScreen = () => {
    return (
        <View>
            <ImageDetails title="Forest" imageSource={require('../../assets/forest.jpg')} score={9} />
            <ImageDetails title="Beach" imageSource={require('../../assets/beach.jpg')} score={7} />
            <ImageDetails title="Mountain" imageSource={require('../../assets/mountain.jpg')} score={10} />
        </View>
    );
};

const styles = StyleSheet.create({});

export default ImageScreen;
