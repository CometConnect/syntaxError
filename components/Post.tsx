import { getAuth } from "firebase/auth";
import React, { Component } from "react";
import { Text, View } from "react-native";
import styles from "../styles/components/Post";
import { State, PostInf, getLanguageFromLangs } from "../util";

export default class Post extends Component<PostInf, State> {
  constructor(props: PostInf) {
    super(props);
  }

  render(): React.ReactNode {
    const { description, language: lang, title } = this.props;
    const author = getAuth().currentUser!;
    const language = getLanguageFromLangs(lang);
    return (
      <View style={styles.container}>
        <View style={styles.top}>
          <Text style={styles.author}>{author.displayName}</Text>
          <View style={styles.lang(language)}>
            <Text style={styles.langName}>{language.name}</Text>
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description.slice(0, 20)}...</Text>
      </View>
    );
  }
}
