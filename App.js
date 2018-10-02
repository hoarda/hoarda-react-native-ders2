import React, { Component } from "react";
import { AppRegistry, StyleSheet, Text, View } from "react-native";

export default class LotsOfStyles extends Component {
  render() {
    return (
      <View>
        <Text style={styles.red}>kirmizi</Text>
        <Text style={styles.bigblue}>buyuk mavi</Text>
        <Text style={[styles.bigblue, styles.red]}>
          buyuk mavi ve buyuk kirmizi
        </Text>
        <Text style={[styles.red, styles.bigblue]}>red, then bigblue</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  bigblue: {
    color: "blue",
    fontWeight: "bold",
    fontSize: 30
  },
  red: {
    color: "red"
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => LotsOfStyles);
