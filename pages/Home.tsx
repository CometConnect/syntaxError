import React, { Component } from "react";
import { View } from "react-native";
import styles from "../styles/pages/Home";
import { Languages, Props, State } from "../types";
import { PostInf } from "../types";

import Search from "../components/Search";
import Post from "../components/Post";

export default class Home extends Component<Props, State> {
  posts: PostInf[];
  constructor(props: Props) {
    super(props);

    // demo posts
    this.posts = [
      {
        author: { displayName: "John Doe" },
        language: Languages.JS,
        title: "How can I remove a specific item from an array?",
        description: `How do I remove a specific value from an array
        Something like:
        \`\`\`js
        array.remove(value)
        \`\`\`
        I have to use *core* Javascript. No Frameworks`,
      },
      {
        author: { displayName: "John Doe" },
        language: Languages.PY,
        title: "How can I remove a specific item from an array?",
        description: `How do I remove a specific value from an array
        Something like:
        \`\`\`py
        array.remove(value)
        \`\`\`
        I have to use *core* Python`,
      },
      {
        author: { displayName: "John Doe" },
        language: Languages.CS,
        title: "How can I remove a specific item from an array?",
        description: `How do I remove a specific value from an array
        Something like:
        \`\`\`cs
        array.remove(value)
        \`\`\`
        I have to use *core* C#`,
      },
    ];
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Search />
        {this.posts.map((item) => (
          <Post {...item} />
        ))}
      </View>
    );
  }
}
