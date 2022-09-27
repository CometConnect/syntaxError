import React, { Component } from "react";
import { Image, TextInput, View } from "react-native";
import styles from "../styles/components/Search";
import { Props, State } from "../types";

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <View style={styles.box}>
        <Image source={require("../assets/search.svg")} style={styles.logo} />
        <TextInput placeholder="Ask for help..." style={styles.placeHolder} />
      </View>
    );
  }
}
