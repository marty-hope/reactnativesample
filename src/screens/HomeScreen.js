import React from "react";
import { Text, StyleSheet, View, TouchableOpacity } from "react-native";

const HomeScreen = ({navigation}) => {
  var i = navigation;
  return (
    <View>
      <TouchableOpacity onPress={() => i.navigate('Components')}>
        <Text style={styles.text}>Go to Component Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i.navigate('List')}>
        <Text style={styles.text}>Go to List Demo</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i.navigate('Image')}>
        <Text style={styles.text}>Go to Images</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => i.navigate('Counter')}>
        <Text style={styles.text}>Go to Counter</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 20,
    paddingTop: 10,
    paddingBottom: 10,
    borderWidth: 2,
    borderColor: 'black',
    textAlign: "center",
    margin: 60,
    color: 'black'
  }
});

export default HomeScreen;

