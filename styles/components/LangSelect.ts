import { Language, rem, TextS, ViewS } from "../../types"

export default {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "100%"
  },
  langView(lang) {
    return {
      width: "50%",
      backgroundColor: lang.color,
      paddingTop: 1 * rem,
      paddingBottom: 1 * rem,
      borderRadius: 3 * rem,
      marginBottom: 1 * rem,
    }
  },
  langText: {
    textAlign: "center",
    color: "white",
  },
} as {
  container: ViewS
  langView: (lang: Language) => ViewS
  langText: TextS
}