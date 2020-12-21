import React from 'react';
import {Text, View,StyleSheet} from 'react-native';

const ComponentsScreen = () => {
    const myName = 'Marty';
    const greeting = [
        'Getting started with React Native?!',
        'May name is ' + myName + 'Hope'];

    return (
    <View>
        <Text style={styles.textStyle}>{greeting[0]}</Text>
        <Text style={{fontSize:20}}>{greeting[1]}</Text>
    </View>
    );
};

const styles = StyleSheet.create ({
    textStyle: {
        fontSize: 45
    }
})

export default ComponentsScreen;