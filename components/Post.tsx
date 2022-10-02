import { getAuth } from "firebase/auth";
import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/Post";
import { State, PostInf, getLanguageFromLangs } from "../util";

interface Props extends PostInf {
  screenMode(id: string): void;
}

export default class Post extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    const { author, description, language: lang, title } = this.props;
    const language = getLanguageFromLangs(lang);
    return (
      <TouchableOpacity
        onPress={() => this.props.screenMode(this.props.id)}
        style={styles.container}
      >
        <View style={styles.top}>
          <Text style={styles.author}>{author}</Text>
          <View style={styles.lang(language)}>
            <Text style={styles.langName}>{language.name.slice(0, 2)}</Text>
          </View>
        </View>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description.slice(0, 20)}...</Text>
      </TouchableOpacity>
    );
  }
}
