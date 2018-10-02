import React, { Component } from "react";
import { AppRegistry, Text, View } from "react-native";

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => {
      this.setState(previousState => {
        return { isShowingText: !previousState.isShowingText };
      });
    }, 1000);
  }
  render() {
    let display = this.state.isShowingText ? this.props.text : "";
    return <Text>{display}</Text>;
  }
}
export default class BlinkApp extends Component {
  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <Blink text=" love react native" />
        <Blink text=" love react native" />
        <Blink text=" love react native" />
        <Blink text=" love react native" />
        <Blink text=" love react native" />
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => LotsOfGreetings);
