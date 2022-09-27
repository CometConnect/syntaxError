import React, { Component } from "react";
import { Text, TextInput, View } from "react-native";
import styles from "../styles/pages/Profile";
import { Props, State, Languages } from "../types";

export default class CreatePost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <View style={styles.pfp}> </View>
        {/* <Image />  // TODO pfp */}
        <View style={styles.langBadge(Languages.PY)}>
          <Text style={styles.langText}>Python</Text>
          {/* // TODO */}
        </View>
        <TextInput
          style={styles.descriptionInput}
          numberOfLines={10}
          placeholder="Describe Yourself"
          editable={false}
        />
        {/* // TODO fetch description and replace placeholder | editable on edit */}
      </View>
    );
  }
}
