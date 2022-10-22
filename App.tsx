import "./database";
import React, { Component } from "react";
import {
  Image,
  ImageSourcePropType,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "./styles/app";
import { Props, Screens } from "./util";
import { getAuth } from "firebase/auth";

import Home from "./pages/Home";
import Profile from "./pages/Profile";
import CreatePost from "./pages/CreatePost";
import Loading from "./components/Loading";
import Login from "./components/Login";
import Post from "./components/PostScreen";

enum Hover {
  Home = "home",
  CreatePost = "create_post",
  Profile = "profile",
  Null = "none",
}
type State = {
  currentComponent: Function;
  hover: Hover;
  loading: boolean;
  login: boolean;
};

export default class App extends Component<Props, State> {
  map: [Screens, Function][];
  constructor(props: Props) {
    super(props);
    this.map = [
      [Screens.Home, Home],
      [Screens.CreatePost, CreatePost],
      [Screens.Profile, Profile],
    ];
    this.state = {
      currentComponent: Home,
      hover: Hover.Null,
      loading: true,
      login: false,
    };
  }

  componentDidMount(): void {
    getAuth().onAuthStateChanged((user) => {
      let output = { loading: false, login: false };
      if (user) output.login = true;
      this.setState(output);
    });
  }

  Item(
    hover: Hover,
    component: Function,
    image: ImageSourcePropType
  ): React.ReactNode {
    const styleToApply =
      this.state.hover === hover ? styles.itemHover : styles.item;
    return (
      <TouchableOpacity
        style={styleToApply}
        onFocus={() => this.setState({ hover })}
        onPress={() => this.setState({ currentComponent: component })}
      >
        <Image source={image} style={styles.icon} />
      </TouchableOpacity>
    );
  }

  render(): React.ReactNode {
    if (this.state.loading)
      return (
        <View style={styles.container}>
          <Loading
            nav={(screen: Screens) => {
              for (let i = 0; i < this.map.length; i++) {
                const item = this.map[i];
                if (screen === item[0])
                  this.setState({ currentComponent: item[1] });
              }
            }}
          />
        </View>
      );
    if (!this.state.login)
      return (
        <View style={styles.container}>
          <Login
            loginStateUpdate={() => {
              this.setState({ login: true });
            }}
          />
        </View>
      );
    return (
      <View style={styles.container}>
        <View style={styles.screen}>
          <this.state.currentComponent
            nav={(screen: Screens) => {
              for (let i = 0; i < this.map.length; i++) {
                const item = this.map[i];
                if (screen === item[0])
                  this.setState({ currentComponent: item[1] });
              }
            }}
          />
        </View>
        <View style={styles.nav}>
          {this.Item(Hover.Home, Home, require(`./assets/home.svg`))}
          {this.Item(
            Hover.CreatePost,
            CreatePost,
            require(`./assets/create_post.svg`)
          )}
          {this.Item(Hover.Profile, Profile, require(`./assets/profile.svg`))}
        </View>
      </View>
    );
  }
}
