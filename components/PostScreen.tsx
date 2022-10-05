import { getAuth } from "firebase/auth";
import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import {
  Image,
  NativeSyntheticEvent,
  Text,
  TextInput,
  TextInputKeyPressEventData,
  TouchableOpacity,
  View,
} from "react-native";
import styles from "../styles/components/PostScreen";
import {
  getPost,
  PostInput,
  Langs,
  getLanguageFromLangs,
  postComment,
} from "../util";
import Comment from "./Comment";

interface Props {
  id: string;
  back: Function;
}

export default class PostScreen extends Component<
  Props,
  PostInput & { comment: string }
> {
  constructor(props: Props) {
    super(props);
    this.state = {
      author: "",
      comments: [],
      description: "",
      language: Langs.JS,
      title: "",
      comment: "",
    };
  }

  componentDidMount(): void {
    this.refresh();
  }

  refresh() {
    getPost(this.props.id).then((data) => {
      if (!data) return this.props.back();
      data.description = data.description.split("         ").join("  \n");
      this.setState({
        author: data.author,
        comments: data.comments,
        description: data.description,
        language: data.language,
        title: data.title,
      });
    });
  }

  comments(): React.ReactNode {
    if (this.state.comments.length === 0) return null;
    return (
      <>
        <View style={styles.comments}>
          {this.state.comments.map((comment) => (
            <Comment {...comment} />
          ))}
        </View>
      </>
    );
  }

  body(): React.ReactNode {
    const language = getLanguageFromLangs(this.state.language);
    return (
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
        <View style={styles.box}>
          <TextInput
            placeholder="Comment"
            style={styles.placeHolder}
            onChangeText={(comment) => this.setState({ comment })}
            onKeyPress={(event) => {
              const ctx =
                event as unknown as NativeSyntheticEvent<TextInputKeyPressEventData> & {
                  code: string;
                };
              if (this.state.comment === "") return;
              if (ctx.code === "Enter") {
                postComment(this.props.id, [
                  ...this.state.comments,
                  {
                    username:
                      getAuth().currentUser!.displayName || "Unnamed User",
                    comment: this.state.comment,
                    uid: getAuth().currentUser!.uid,
                  },
                ]).then(() => {
                  this.refresh();
                });
              }
            }}
          />
        </View>
        {this.comments()}
      </View>
    );
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => this.props.back()}>
          <Image source={require("../assets/back.svg")} style={styles.back} />
        </TouchableOpacity>
        {this.body()}
      </View>
    );
  }
}
