import React, { Component } from "react";
import {
  Image,
  NativeSyntheticEvent,
  TextInput,
  TextInputKeyPressEventData,
  View,
} from "react-native";
import styles from "../styles/components/Search";
import { Props as Prop } from "../util";

interface State {
  search: string;
}

interface Props extends Prop {
  search(search: string): void;
}

export default class Search extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      search: "",
    };
  }

  render(): React.ReactNode {
    return (
      <View style={styles.box}>
        <Image source={require("../assets/search.svg")} style={styles.logo} />
        <TextInput
          placeholder="Ask for help..."
          style={styles.placeHolder}
          onChangeText={(search) => this.setState({ search })}
          onKeyPress={(event) => {
            const ctx =
              event as unknown as NativeSyntheticEvent<TextInputKeyPressEventData> & {
                code: string;
              };

            if (ctx.code === "Enter") this.props.search(this.state.search);
          }}
        />
      </View>
    );
  }
}
