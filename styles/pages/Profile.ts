import { Language, rem, TextS, ViewS } from "../../types"

export default {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    width: "80%",
  },
  title: {
    fontSize: 3 * rem,
    color: "white",
    marginBottom: 0.5 * rem,
  },
  pfp: {
    borderRadius: 100 * rem,
    backgroundColor: "#d9d9d9",
    width: 5 * rem,
    height: 5 * rem,
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
  descriptionInput: {
    backgroundColor: "#1e1e1e",
    borderColor: "#934028",
    borderWidth: 0.5 * rem,
    borderRadius: 2 * rem,
    textAlign: "center",
    alignContent: "center",
    color: "white",
    width: "80%",
    height: 15 * rem,
  }
} as {
  container: ViewS
  title: TextS
  pfp: ViewS // TODO
  langBadge: (lang: Language) => ViewS
  langText: TextS
  descriptionInput: TextS
}