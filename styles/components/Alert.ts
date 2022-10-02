import { rem, TextS, ViewS } from "../../util"

export default {
  container: {
    backgroundColor: "#1e1e1e",
    padding: 2 * rem,
    borderRadius: 2 * rem,
    justifyContent: "center",
    alignContent: "center",
  },
  message: {
    color: "white",
    marginBottom: 2 * rem,
  },
  button: {
    backgroundColor: "#c04b26",
    borderRadius: 0.5 * rem,
    paddingTop: 0.5 * rem,
    paddingBottom: 0.5 * rem,
    paddingLeft: 2 * rem,
    paddingRight: 2 * rem,
  },
  buttontext: {
    textAlign: "center",
  }
} as {
  container: ViewS
  message: TextS
  button: ViewS
  buttontext: TextS
}