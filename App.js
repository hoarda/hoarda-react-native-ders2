import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

export default class FixedDimensionBasics extends Component {
  render() {
    return (
      <View>
        <View
          style={{ width: 100, height: 100, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 200, height: 200, backgroundColor: "skyblue" }} />
        <View
          style={{ width: 400, height: 400, backgroundColor: "steelblue" }}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent("AwesomeProject", () => FixedDimensionBasics);
