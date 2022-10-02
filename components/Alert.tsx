import React, { Component } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import styles from "../styles/components/Alert";
import { State } from "../util";

interface Props {
  message: string;
  hider: Function;
}

export default class Alert extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {};
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.message}>{this.props.message}</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.hider()}
        >
          <Text style={styles.buttontext}>Ok</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
