import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import LangSelect from "../components/LangSelect";
import styles from "../styles/pages/CreatePost";
import { Language, Languages, Props } from "../types";

interface State {
  langSelect: boolean;
  lang: Language;
}

export default class CreatePost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      langSelect: false,
      lang: Languages.PY,
    };
  }

  render(): React.ReactNode {
    if (this.state.langSelect)
      return (
        <LangSelect
          langSelectUpdate={(lang: Language) =>
            this.setState({ lang, langSelect: false })
          }
        />
      );
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ask a question</Text>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          maxLength={50}
        />
        <TextInput
          placeholder="Description"
          style={styles.descriptionInput}
          multiline={true}
          numberOfLines={10}
        />
        <TouchableOpacity
          onPress={() => this.setState({ langSelect: true })}
          style={styles.lang(this.state.lang)}
        >
          <Text style={styles.langText}>{this.state.lang.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submit}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
