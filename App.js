import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

class Greeting extends Component {
  render() {
    return <Text>Hello {this.props.name}!</Text>;
  }
}

export default class LotsOfGreetings extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Greeting name="Esma" />
        <Greeting name="Hussein" />
        <Greeting name="Oktay" />
      </View>
    );
  }
}
AppRegistry.registerComponent("AwesomeProject", () => LotsOfGreetings);
