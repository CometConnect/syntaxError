import { Language, rem, TextS, ViewS } from "../../util"

export default {
  container: {
    backgroundColor: "#3d3d3d",
    padding: 1 * rem,
    borderRadius: 1 * rem,
  },
  author: {
    color: "white",
  },
  message: {
    color: "white",
    fontSize: 1.5 * rem,
  },
  profile: {
    borderRadius: 1 * rem,
    backgroundColor: "#202020",
    padding: 1 * rem,
    borderColor: "#934028",
    borderWidth: 0.1 * rem,
    alignItems: "center",
  },
  name: {
    fontSize: 2 * rem,
    color: "white",
    marginBottom: 0.5 * rem,
  },
  langBadge(lang) {
    return {
      width: 6 * rem,
      backgroundColor: lang.color,
      borderRadius: 2 * rem,
      marginBottom: 2 * rem,
    }
  },
  langText: {
    color: "white",
    textAlign: "center",
  },
  description: {
    backgroundColor: "#1e1e1e",
    borderColor: "#934028",
    borderWidth: 0.5 * rem,
    borderRadius: 2 * rem,
    textAlign: "center",
    alignContent: "center",
    color: "white",
    width: "80%",
    height: 15 * rem,
  },
} as {
  container: ViewS
  author: TextS
  message: TextS
  profile: ViewS
  name: TextS
  langBadge: (lang: Language) => ViewS
  langText: TextS
  description: ViewS
}