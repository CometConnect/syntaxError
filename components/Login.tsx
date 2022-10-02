import {
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithPopup,
} from "firebase/auth";
import React, { Component } from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "../styles/components/Login";
import { State } from "../util";

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
        style={styles.container}
      >
        <Text style={styles.text}>Login</Text>
      </TouchableOpacity>
    );
  }
}
