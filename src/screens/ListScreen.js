import React from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

const ListScreen = () => {
    const friends = [
        { name: 'Marty', age: 10 },
        { name: 'Susan', age: 14 },
        { name: 'Eric', age: 20 },
        { name: 'Tabitha', age: 71 },
        { name: 'John' , age: 57 },
        { name: 'Sasha', age: 89 },
        { name: 'Rico', age: 23 },
        { name: 'Leslie', age: 46 },
    ];
    return (
        <View style={styles.view}>
            <FlatList
                keyExtractor={i => i.name}
                data={friends}
                renderItem={({item}) => {
                    return <Text style={styles.textStyle}>{item.name + ' - ' + 'Age ' + item.age}</Text>
                }}>
            </FlatList>
        </View>
    );
}

const styles = StyleSheet.create({
    textStyle: {
        marginVertical: 40,
        fontSize: 15
    },
    view: {
        margin: 30,
        backgroundColor: "yellow"
    }
});

export default ListScreen;