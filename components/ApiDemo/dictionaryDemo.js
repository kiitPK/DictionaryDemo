import React, { Component } from "react";
import { Text, View, FlatList, StyleSheet, Alert } from "react-native";
import { Header, SearchBar } from "react-native-elements";

import weatherApi from "./dictionaryApi";

export default class WetherDemo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      queryWord: "Welcome",
      wordData: "",
      refreshing: false
    };
  }

  async componentDidMount() {
    const menuData = await weatherApi.fetchUsers(this.state.queryWord);
    console.log("+++++++++++++++++++123" + menuData.message);
    this.setState({
      wordData: menuData
    });
  }

  updateState = () => {
    this.setState({ queryWord: "The state is updated" });
  };

  async textChanged(word) {
    this.setState({ queryWord: word });

    const menuData = await weatherApi.fetchUsers(this.state.queryWord);
    console.log("+++++++++++++++++++1231" + menuData[0].word);
    this.setState({
      wordData: menuData,
      refreshing: true
    });
  }

  handleRefresh = () => [
    this.setState({
      refreshing: true
    })
  ];

  cleartext() {
    this.setState({
      queryWord: "welcome"
    });
  }

  render() {
    return (
      <View>
        <Header
          leftComponent={{
            icon: "menu",
            color: "#fff",
            onPress: () => alert("pressed")
          }}
          centerComponent={{ text: "DictionaryDemo", style: { color: "#fff" } }}
          rightComponent={{
            icon: "home",
            color: "#fff",
            onPress: () => alert("Home Clicked")
          }}
        />
        <SearchBar
          onChangeText={text => {
            this.textChanged(text);
          }}
          onClear={this.cleartext}
          placeholder="Words with a meaning similar to"
          refreshing={this.state.refreshing}
          onRefresh={this.handleRefresh}
        />

        <FlatList
          data={[{ key: "a" }, { key: "b" }]}
          data={this.state.wordData}
          renderItem={({ item }) => (
            <View style={styles.container}>
              <Text style={styles.name}>{item.word}</Text>
            </View>
          )}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 50,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  h2text: {
    marginTop: 10,
    fontFamily: "Helvetica",
    fontSize: 36,
    fontWeight: "bold"
  },
  flatview: {
    justifyContent: "center",
    paddingTop: 30,
    borderRadius: 2
  },
  name: {
    fontFamily: "Verdana",
    fontSize: 18
  },
  email: {
    color: "red"
  }
});
