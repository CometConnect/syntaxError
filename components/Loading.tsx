import React, { Component } from "react";
import { Text } from "react-native";
import { Props, rem, State } from "../util";

export default class Loading extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <Text
        style={{
          fontSize: 3 * rem,
          color: "white",
        }}
      >
        Loading
      </Text>
    );
  }
}
