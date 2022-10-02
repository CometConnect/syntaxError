import React, { Component } from "react";
import { View } from "react-native";
import styles from "../styles/pages/Home";
import { Props, PostInf, getPosts } from "../util";

import Search from "../components/Search";
import Post from "../components/Post";
import PostScreen from "../components/PostScreen";

interface State {
  posts: PostInf[];
  onPost: string | null;
}

export default class Home extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      posts: [],
      onPost: null,
    };
  }

  componentDidMount(): void {
    getPosts().then((posts) => this.setState({ posts }));
  }

  render(): React.ReactNode {
    if (this.state.onPost) {
      return (
        <PostScreen
          id={this.state.onPost}
          back={() => this.setState({ onPost: null })}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Search nav={this.props.nav} />
        {this.state.posts.map((item) => (
          <Post
            screenMode={(id: string) => {
              this.setState({ onPost: id });
            }}
            {...item}
          />
        ))}
      </View>
    );
  }
}
