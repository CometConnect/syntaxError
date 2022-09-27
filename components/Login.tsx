import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
  User,
} from "firebase/auth";
import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import { rem, State } from "../util";

interface Props {
  loginStateUpdate: () => void;
}

export default class Login extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render(): React.ReactNode {
    return (
      <TouchableOpacity
        onPress={() => {
          signInWithPopup(getAuth(), new GoogleAuthProvider());

          onAuthStateChanged(getAuth(), (user) => {
            if (user) this.props.loginStateUpdate();
          });
        }}
        style={{
          backgroundColor: "#934028",
          paddingTop: 1 * rem,
          paddingBottom: 1 * rem,
          paddingLeft: 2 * rem,
          paddingRight: 2 * rem,
          borderRadius: 0.5 * rem,
        }}
      >
        <Text
          style={{
            fontSize: 3 * rem,
            color: "white",
          }}
        >
          Login
        </Text>
      </TouchableOpacity>
    );
  }
}
