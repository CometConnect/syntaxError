import { getAuth } from "firebase/auth";
import React, { Component } from "react";
import { Text, TextInput, View, Image } from "react-native";
import styles from "../styles/pages/Profile";
import { Props, getUserData, UserData, Languages } from "../util";

interface State {
  userData: UserData;
}

export default class CreatePost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userData: { description: "", favLang: Languages.PY },
    };
  }

  componentDidMount(): void {
    getUserData(getAuth().currentUser!).then((userData) =>
      this.setState({ userData })
    );
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Image
          style={styles.image}
          source={{
            uri: getAuth().currentUser!.photoURL!,
          }}
        />
        <View style={styles.langBadge(this.state.userData.favLang)}>
          <Text style={styles.langText}>
            {this.state.userData.favLang.fullname}
          </Text>
        </View>
        <TextInput
          style={styles.descriptionInput}
          numberOfLines={10}
          placeholder={this.state.userData.description}
          editable={false}
        />
      </View>
    );
  }
}
