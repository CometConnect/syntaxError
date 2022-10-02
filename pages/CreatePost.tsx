import { getAuth } from "firebase/auth";
import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Alert from "../components/Alert";
import LangSelect from "../components/LangSelect";
import styles from "../styles/pages/CreatePost";
import { Language, Languages, postPost, Props, Screens } from "../util";

interface State {
  langSelect: boolean;
  lang: Language;
  title: string;
  description: string;
  message: string;
}

export default class CreatePost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      langSelect: false,
      lang: Languages.PY,
      title: "",
      description: "",
      message: "",
    };
  }

  submit() {
    const { title, description, lang } = this.state;
    if (title === "" || description === "") {
      this.setState({ message: "Please fill in all the fields" });
    }

    postPost({
      author: getAuth().currentUser!.displayName || "Unnamed user",
      description,
      title,
      language: lang.name,
      comments: [],
    }).then((id) => {
      console.log(id);
      this.props.nav(Screens.Home);
    });
  }

  render(): React.ReactNode {
    if (this.state.langSelect) {
      return (
        <LangSelect
          langSelectUpdate={(lang: Language) =>
            this.setState({ lang, langSelect: false })
          }
        />
      );
    }

    if (this.state.message !== "") {
      return (
        <Alert
          message={this.state.message}
          hider={() => this.setState({ message: "" })}
        />
      );
    }
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Ask a question</Text>
        <TextInput
          style={styles.titleInput}
          placeholder="Title"
          onChangeText={(title) => this.setState({ title })}
          maxLength={50}
        />
        <TextInput
          style={styles.descriptionInput}
          placeholder="Description"
          onChangeText={(description) => this.setState({ description })}
          multiline={true}
          numberOfLines={10}
        />
        <TouchableOpacity
          onPress={() => this.setState({ langSelect: true })}
          style={styles.lang(this.state.lang)}
        >
          <Text style={styles.langText}>{this.state.lang.name}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.submit} onPress={() => this.submit()}>
          <Text style={styles.submitText}>Submit</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
