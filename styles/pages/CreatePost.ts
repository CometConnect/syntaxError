import { Language, rem, TextS, ViewS } from "../../util"

export default {
  container: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    fontSize: 3 * rem,
    color: "white",
    marginBottom: 2 * rem,
  },
  titleInput: {
    width: "100%",
    height: 4 * rem,
    borderRadius: 1 * rem,
    backgroundColor: "#1e1e1e",
    borderWidth: 1 * rem,
    borderColor: "#943f24",
    alignContent: "center",
    textAlign: "center",
    color: "white",
    marginBottom: 1 * rem,
  },
  descriptionInput: {
    width: "100%",
    height: 10 * rem,
    borderRadius: 1 * rem,
    backgroundColor: "#1e1e1e",
    borderWidth: 1 * rem,
    borderColor: "#943f24",
    textAlign: "center",
    alignContent: "center",
    color: "white",
    marginBottom: 1 * rem,
  },
  lang(lang) {
    return {
      width: "100%",
      height: 3 * rem,
      borderRadius: 1 * rem,
      backgroundColor: lang.color,
      justifyContent: "center",
      marginBottom: 3 * rem,
    }
  },
  langText: {
    color: "white",
    textAlign: "center",
  },
  submit: {
    width: "100%",
    height: 3 * rem,
    borderRadius: 1 * rem,
    backgroundColor: "#bf4a26",
    justifyContent: "center",
  },
  submitText: {
    color: "white",
    textAlign: "center",
  },
} as {
  container: ViewS
  title: TextS
  titleInput: TextS
  descriptionInput: TextS
  lang: (lang: Language) => ViewS
  langText: TextS
  submit: ViewS
  submitText: TextS
}