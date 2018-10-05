import React, { Component } from "react";
import { AppRegistry, Text, TextInput, View } from "react-native";

export default class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = { text: "" };
  }

  render() {
    return (
      <View style={{ padding: 10 }}>
        <TextInput
          style={{ height: 40 }}
          placeholder="Çeviri yapılacak metni giriniz!"
          onChangeText={text => this.setState({ text })}
        />
        <Text style={{ padding: 10, fontSize: 42 }}>
          {this.state.text
            .split(" ")
            .map(word => word && "🍕")
            .join(" ")}
        </Text>
      </View>
    );
  }
}

AppRegistry.registerComponent("AwesomeProject", () => PizzaTranslator);
