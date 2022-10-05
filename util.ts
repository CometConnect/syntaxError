import { User } from "firebase/auth"
import { addDoc, collection, doc, getDoc, getDocs, getFirestore, query, setDoc } from "firebase/firestore"
import { ImageStyle, StyleProp, TextStyle, ViewStyle } from "react-native"

export type ViewS = StyleProp<ViewStyle>
export type TextS = StyleProp<TextStyle>
export type ImageS = StyleProp<ImageStyle>

export const rem = 16

export type Props = {
  nav(screen: Screens): void
}
export type State = {}

export enum Screens {
  Home = "Home",
  CreatePost = "CreatePost",
  Profile = "Profile",
}

export type Language = {
  name: Langs,
  color: string,
  fullname: string
}
export enum Langs {
  JS = "JS",
  TS = "TS",
  PY = "PY",
  CS = "C#",
  CPP = "C++",
  C = "C",
  RUST = "RUST",
  GO = "GO",
  PHP = "PHP",
  RUBY = "RUBY",
}
export const Languages = {
  JS: { name: Langs.JS, color: "#a89813", fullname: "Javascript" },
  TS: { name: Langs.TS, color: "#2f74c0", fullname: "Typescript" },
  PY: { name: Langs.PY, color: "#366c9b", fullname: "Python" },
  CS: { name: Langs.CS, color: "#8e39a5", fullname: "C#" },
  CPP: { name: Langs.CPP, color: "#005697", fullname: "C++" },
  C: { name: Langs.C, color: "#00427e", fullname: "C" },
  RUST: { name: Langs.RUST, color: "#ef4a00", fullname: "Rust" },
  GO: { name: Langs.GO, color: "#00a9d2", fullname: "Go" },
  PHP: { name: Langs.PHP, color: "#7377ad", fullname: "PHP" },
  RUBY: { name: Langs.RUBY, color: "#aa1302", fullname: "Ruby" }
} as {
    [key in keyof typeof Langs]: Language
  }


export interface Comment {
  username: string,
  comment: string,
  uid: string
}
export interface PostInput {
  author: string
  language: Langs
  title: string
  description: string
  comments: Comment[]
}
export interface Post extends PostInput {
  id: string
}

export interface UserData {
  description: string,
  favLang: Language
}

export function getLanguageFromLangs(lang: Langs): Language {
  try {
    return Object.entries(Languages).filter((value) => value[1].name == lang)[0][1];
  }
  catch {
    return Languages.PY;
  }
}

export async function getUserData(uid: string): Promise<UserData> {
  const rawData = await getDoc(doc(getFirestore(), 'users', uid));
  if (!rawData.exists()) return { description: "", favLang: getLanguageFromLangs(Langs.PY) };
  const data = rawData.data() as { description: string, favLang: Langs };
  return {
    description: data.description,
    favLang: getLanguageFromLangs(data.favLang)
  };
}

export async function getPosts(): Promise<Post[]> {
  const rawData = await getDocs(query(collection(getFirestore(), "posts")));
  const data: Post[] = [];
  rawData.forEach(info => data.push({ id: info.id, ...info.data() } as Post));
  return data;
}

export async function getPost(id: string): Promise<Post | null> {
  const data = await getDoc(doc(getFirestore(), 'posts', id));
  if (!data.exists()) return null;
  return data.data() as Post;
}

export async function postPost(data: PostInput): Promise<string> {
  const response = await addDoc(collection(getFirestore(), "posts"), data)
  return response.id
}

export async function postComment(postId: string, comments: Comment[]): Promise<void> {
  await setDoc(doc(getFirestore(), "posts", postId), { comments }, { merge: true })
}