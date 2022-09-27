import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"

export type ViewS = StyleProp<ViewStyle>
export type TextS = StyleProp<TextStyle>
export type ImageS = StyleProp<ImageStyle>

export const rem = 16

export type Props = {}
export type State = {}

export type Language = {
  name: string,
  color: string,
  fullname: string
}
export const Languages = {
  JS: { name: "JS", color: "#fde51e", fullname: "Javascript" },
  TS: { name: "TS", color: "#2f74c0", fullname: "Typescript" },
  PY: { name: "PY", color: "#366c9b", fullname: "Python" },
  CS: { name: "C#", color: "#8e39a5", fullname: "C#" },
  CPP: { name: "C++", color: "#005697", fullname: "C++" },
  C: { name: "C", color: "#00427e", fullname: "C" },
  RUST: { name: "RU", color: "#ef4a00", fullname: "Rust" },
  GO: { name: "GO", color: "#00a9d2", fullname: "Go" },
  PHP: { name: "PHP", color: "#7377ad", fullname: "PHP" },
  RUBY: { name: "RB", color: "#aa1302", fullname: "Ruby" }
} as {
  [key: string]: Language
}

export interface PostInf {
  author: { displayName: string } // TODO add firebase user
  language: Language
  title: string
  description: string
}