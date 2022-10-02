import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Image, Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/PostScreen";
import { getPost, PostInfInput, Langs, getLanguageFromLangs } from "../util";

interface Props {
  id: string;
  back: Function;
}

export default class Home extends Component<Props, PostInfInput> {
  constructor(props: Props) {
    super(props);
    this.state = {
      author: "",
      comments: [],
      description: "",
      language: Langs.JS,
      title: "",
    };
  }

  componentDidMount(): void {
    getPost(this.props.id).then((data) => {
      if (!data) return this.props.back();
      data.description = data.description.split("         ").join("  \n");
      console.log(data.description);
      this.setState({ ...data });
    });
  }

  render(): React.ReactNode {
    const language = getLanguageFromLangs(this.state.language);
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.back()}>
          <Image source={require("../assets/back.svg")} style={styles.back} />
        </TouchableOpacity>
        <View style={styles.body}>
          <View style={styles.header}>
            <Text style={styles.title}>{this.state.title}</Text>
            <View style={styles.lang(language)}>
              <Text style={styles.langName}>{language.name}</Text>
            </View>
          </View>
          <View style={styles.description}>
            <ReactMarkdown>{this.state.description}</ReactMarkdown>
          </View>
        </View>
      </View>
    );
  }
}
