import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import styles from "../styles/components/LangSelect";
import { Language, Languages, State } from "../types";

interface Props {
  langSelectUpdate: (lang: Language) => void;
}

export default class LangSelect extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  lang(lang: Language): React.ReactNode {
    return (
      <TouchableOpacity
        key={lang.name}
        onPress={() => {
          this.props.langSelectUpdate(lang);
        }}
        style={styles.langView(lang)}
      >
        <Text style={styles.langText}>{lang.fullname}</Text>
      </TouchableOpacity>
    );
  }

  render(): React.ReactNode {
    return (
      <View style={styles.container}>
        {Object.entries(Languages).map((rawLang) => {
          const lang = rawLang[1];
          return this.lang(lang);
        })}
      </View>
    );
  }
}
