import { getAuth } from "firebase/auth";
import { doc, getFirestore, setDoc } from "firebase/firestore";
import React, { Component } from "react";
import {
  Text,
  TextInput,
  View,
  Image,
  TouchableOpacity,
  NativeSyntheticEvent,
  TextInputKeyPressEventData,
} from "react-native";
import LangSelect from "../components/LangSelect";
import styles from "../styles/pages/Profile";
import { Props, getUserData, UserData, Languages, Language } from "../util";

interface State {
  userData: UserData;
  langState: boolean;
  desEdit: boolean;
  description: string;
}

export default class CreatePost extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      userData: { description: "", favLang: Languages.PY },
      langState: false,
      desEdit: false,
      description: "",
    };
  }

  componentDidMount(): void {
    getUserData(getAuth().currentUser!.uid).then((userData) => {
      this.setState({ userData, description: userData.description });
    });
  }

  render(): React.ReactNode {
    if (this.state.langState) {
      return (
        <LangSelect
          langSelectUpdate={(lang: Language) => {
            setDoc(
              doc(getFirestore(), "users", getAuth().currentUser!.uid),
              { favLang: lang.name },
              { merge: true }
            );
            this.setState({
              langState: false,
              userData: {
                favLang: lang,
                description: this.state.userData.description, //! uneffected
              },
            });
          }}
        />
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.title}>Profile</Text>
        <Image
          style={styles.image}
          source={{
            uri: getAuth().currentUser!.photoURL!,
          }}
        />
        <TouchableOpacity
          onPress={() => this.setState({ langState: true })}
          style={styles.langBadge(this.state.userData.favLang)}
        >
          <Text style={styles.langText}>
            {this.state.userData.favLang.fullname}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.setState({ desEdit: true })}>
          <Image
            style={styles.settings}
            source={require("../assets/settings.svg")}
          />
        </TouchableOpacity>
        <TextInput
          style={styles.descriptionInput}
          numberOfLines={10}
          placeholder={this.state.description}
          editable={this.state.desEdit}
          onChangeText={(description) => this.setState({ description })}
          onKeyPress={(event) => {
            const ctx =
              event as unknown as NativeSyntheticEvent<TextInputKeyPressEventData> & {
                code: string;
              };

            if (ctx.code === "Enter") {
              setDoc(
                doc(getFirestore(), "users", getAuth().currentUser!.uid),
                { description: this.state.description },
                { merge: true }
              );
              this.setState({ desEdit: false });
            }
          }}
        />
      </View>
    );
  }
}
