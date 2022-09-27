import React, { Component } from "react";
import { Image, TouchableOpacity, View } from "react-native";
import styles from "./styles/app";
import { Props } from "./types";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";

enum Hover {
  Home = "home",
  CreatePost = "create_post",
  Profile = "profile",
  Null = "none",
}
type State = {
  currentComponent: Function;
  hover: Hover;
};

export default class App extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      currentComponent: CreatePost,
      hover: Hover.Null,
    };
  }

  Item(hover: Hover, component: Function): React.ReactNode {
    const styleToApply =
      this.state.hover === hover ? styles.itemHover : styles.item;
    return (
      <TouchableOpacity
        style={styleToApply}
        onFocus={() => this.setState({ hover })}
        onPress={() => this.setState({ currentComponent: component })}
      >
        <Image source={require(`./assets/${hover}.svg`)} style={styles.icon} />
      </TouchableOpacity>
    );
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <this.state.currentComponent />
        </View>
        <View style={styles.nav}>
          {this.Item(Hover.Home, Home)}
          {this.Item(Hover.CreatePost, CreatePost)}
          {this.Item(Hover.Profile, Profile)}
        </View>
      </View>
    );
  }
}
