import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';

const ImageDetail = ({imageSource, title}) => {
    return (
        <View>
            <Image source={imageSource} style={styles.image}></Image>
            <Text style={styles.text}>{title}</Text>
        </View>
    )
};

const styles = StyleSheet.create({
    image: {
        marginBottom: 50
    },
    text: {
        marginLeft: 250,
        marginTop: -30,
    }
});

export default ImageDetail;