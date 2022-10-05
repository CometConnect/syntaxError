import { rem, Language, ViewS, TextS, ImageS } from "../../util"

export default {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    marginBottom: 1 * rem,
  },
  back: {
    width: 50,
    height: 50,
  },
  body: {
    backgroundColor: "#1e1e1e",
    borderColor: "#c04b26",
    borderWidth: 4,
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
    marginBottom: 0.5 * rem,
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
  comments: {
    marginTop: 1 * rem,
    backgroundColor: "#1e1e1e",
    gap: 1.3 * rem,
    borderColor: "#c04b26",
    borderWidth: 4,
    padding: 1 * rem,
    borderRadius: 2 * rem,
  },
  box: {
    borderRadius: 24,
    borderWidth: 4,
    borderColor: "#C04B26",
    height: 5 * rem,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    alignSelf: "center",
    paddingRight: 3 * rem,
    paddingLeft: 3 * rem,
    paddingTop: 2 * rem,
    paddingBottom: 2 * rem,
    marginTop: 1 * rem,
  },
  placeHolder: {
    opacity: 50,
    fontSize: 0.7 * rem,
    textAlign: "center",
    marginLeft: 1 * rem,
    color: "white",
  },
  logo: {
    width: 30,
    height: 32,
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
  comments: ViewS
  box: ViewS
  placeHolder: TextS
  logo: ImageS
}