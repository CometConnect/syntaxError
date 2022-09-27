import { Language, rem, TextS, ViewS } from "../../types"

export default {
  container: {
    backgroundColor: "#202020",
    borderRadius: 2 * rem,
    flex: 1,
    flexDirection: "column",
    paddingTop: 1 * rem,
    paddingBottom: 1 * rem,
    paddingLeft: 2 * rem,
    paddingRight: 2 * rem,
    marginBottom: 1 * rem,
  },
  top: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    height: 2 * rem,
  },
  author: {
    color: "#919191",
  },
  lang: (lang) => {
    return {
      borderRadius: 100 * rem,
      backgroundColor: lang.color,
      alignItems: "center",
      justifyContent: "center",
      width: 1.5 * rem,
      height: 1.5 * rem,
    }
  },
  langName: {},
  title: {
    fontSize: 2 * rem,
    color: "#fff",
  },
  description: {
    fontSize: 0.7 * rem,
    color: "#919191",
  },
} as {
  container: ViewS
  top: ViewS
  author: TextS
  lang: (lang: Language) => ViewS
  langName: TextS
  title: TextS
  description: TextS
}