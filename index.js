// import { AppRegistry } from "react-native";
// import App from "./App";

// AppRegistry.registerComponent("albums", () => App);
//import library to help create componenet
import React from "react";
import { View, AppRegistry } from "react-native";
import Header from "./src/components/header";
import AlbumList from "./src/components/AlbumList";
//create component
const App = () => (
  <View style={{ flex: 1 }}>
    <Header headerText={"Albums!"} />
    <AlbumList />
  </View>
);

// Render it to device
AppRegistry.registerComponent("albums", () => App);
