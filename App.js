import React, { Component } from "react";
import { AppRegistry, FlatList, StyleSheet, Text, View } from "react-native";

export default class FlatListBasics extends Component {
  render() {
    return (
      <View style={StyleSheet.container}>
        <FlatList
          data={[
            { key: "Ferdi" },
            { key: "Nuri" },
            { key: "Eray" },
            { key: "Oktay" },
            { key: "Ersel" },
            { key: "Harun" },
            { key: "Enes" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44
  }
});

// skip this line if using Create React Native App
AppRegistry.registerComponent("AwesomeProject", () => FlatListBasics);
