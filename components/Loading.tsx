import React, { Component } from "react";
import { Text } from "react-native";
import styles from "../styles/components/Loading";
import { Props, State } from "../util";

export default class Loading extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return <Text style={styles.container}>Loading</Text>;
  }
}
