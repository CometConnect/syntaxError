import React, { Component } from "react";
import ReactMarkdown from "react-markdown";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/Comment";
import {
  Comment as ComentInf,
  getUserData,
  Languages,
  UserData,
} from "../util";

export default class Comment extends Component<
  ComentInf,
  UserData & { pfpview: boolean }
> {
  constructor(props: ComentInf) {
    super(props);
    this.state = {
      description: "",
      favLang: Languages.PY,
      pfpview: false,
    };
  }

  componentDidMount(): void {
    getUserData(this.props.uid).then((value) => this.setState({ ...value }));
  }

  profileView(): React.ReactNode {
    return (
      <TouchableOpacity
        onPress={() => this.setState({ pfpview: false })}
        style={styles.profile}
      >
        <Text style={styles.name}>{this.props.username}</Text>
        <View style={styles.langBadge(this.state.favLang)}>
          <Text style={styles.langText}>{this.state.favLang.fullname}</Text>
        </View>
        <TextInput
          style={styles.description}
          placeholder={this.state.description}
          numberOfLines={10}
          editable={false}
        />
      </TouchableOpacity>
    );
  }

  render(): React.ReactNode {
    if (this.state.pfpview) {
      return this.profileView();
    }

    return (
      <View style={styles.container}>
        <TouchableOpacity
          onPress={() => this.setState({ pfpview: true })}
          style={styles.author}
        >
          {this.props.username}
        </TouchableOpacity>
        <Text style={styles.message}>
          <ReactMarkdown>{this.props.comment}</ReactMarkdown>
        </Text>
      </View>
    );
  }
}
