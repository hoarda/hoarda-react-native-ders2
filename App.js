import React, { Component } from "react";
import { AppRegistry, Image } from "react-native";

export default class At extends Component {
  render() {
    let pic = {
      uri: "https://i.ytimg.com/vi/fgMEyhFIOtc/hqdefault.jpg"
    };
    return <Image source={pic} style={{ width: 480, height: 360 }} />;
  }
}
AppRegistry.registerComponent("AwesomeProject", () => At);
