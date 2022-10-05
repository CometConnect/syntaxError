import React, { Component } from "react";
import { FlatList, SafeAreaView, View } from "react-native";
import styles from "../styles/pages/Home";
import { Props, Post as PostInf, getPosts } from "../util";

import Search from "../components/Search";
import Post from "../components/Post";
import PostScreen from "../components/PostScreen";
import {
  collection,
  getDocs,
  getFirestore,
  query,
  where,
} from "firebase/firestore";

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
    getPosts().then((posts) => this.setState({ posts: posts.slice(0, 10) }));
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
        <Search
          nav={this.props.nav}
          search={(search: string) => {
            getDocs(
              query(
                collection(getFirestore(), "posts"),
                where("title", ">=", search),
                where("title", "<=", search + "\uf8ff")
              )
            ).then((value) => {
              const posts = value.docs.map((value) =>
                value.data()
              ) as PostInf[];
              this.setState({ posts });
            });
          }}
        />
        <SafeAreaView>
          <FlatList
            style={styles.posts}
            data={this.state.posts}
            keyExtractor={(item) => item.id}
            renderItem={(item) => (
              <Post
                screenMode={(id: string) => this.setState({ onPost: id })}
                {...item.item}
              />
            )}
          />
        </SafeAreaView>
      </View>
    );
  }
}
