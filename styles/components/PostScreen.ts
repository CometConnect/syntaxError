import { rem, Language, ViewS, TextS, ImageS } from "../../util"

export default {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center"
  },
  back: {
    width: 50,
    height: 50,
  },
  body: {
    backgroundColor: "#1e1e1e",
    padding: 3 * rem,
    borderRadius: 2 * rem,
  },
  header: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "center"
  },
  title: {
    color: "white",
    fontSize: 2 * rem,
    marginLeft: 0.5 * rem,
  },
  description: {
    color: "white",
    backgroundColor: "#3d3d3d",
    padding: 1 * rem,
    borderRadius: 2 * rem,
  },
  langName: {},
  lang: (lang) => {
    return {
      borderRadius: 100 * rem,
      backgroundColor: lang.color,
      alignItems: "center",
      justifyContent: "center",
      alignSelf: "center",
      width: 1.5 * rem,
      height: 1.5 * rem,
    }
  },
} as {
  container: ViewS
  back: ImageS
  body: ViewS
  header: ViewS
  title: TextS
  description: TextS
  langName: TextS
  lang: (lang: Language) => ViewS
}