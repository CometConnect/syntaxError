import React, { Component } from "react";
import { View } from "react-native";
import styles from "../styles/pages/Home";
import { Props, PostInf, getPosts } from "../util";

import Search from "../components/Search";
import Post from "../components/Post";

interface State {
  posts: PostInf[];
}

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      posts: [],
    };
  }

  componentDidMount(): void {
    getPosts().then((posts) => this.setState({ posts }));
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Search />
        {this.state.posts.map((item) => (
          <Post {...item} />
        ))}
      </View>
    );
  }
}
