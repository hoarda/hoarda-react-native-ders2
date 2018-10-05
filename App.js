import React, { Component } from "react";
import { AppRegistry, View } from "react-native";

export default class FixedDirectionBasics extends Component {
  render() {
    return (
      <View style={{ flex: 1, flexDirection: "row" }}>
        <View
          style={{
            width: 50,
            height: 50,
            flex: 1,
            backgroundColor: "powderblue"
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            flex: 2,
            backgroundColor: "skyblue"
          }}
        />
        <View
          style={{
            width: 50,
            height: 50,
            flex: 3,
            backgroundColor: "steelblue"
          }}
        />
      </View>
    );
  }
}
AppRegistry.registerComponent("AwesomeProject", () => FixedDirectionBasics);
