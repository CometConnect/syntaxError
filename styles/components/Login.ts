import { rem, TextS, ViewS } from "../../util"

export default {
  container: {
    paddingTop: 1 * rem,
    paddingBottom: 1 * rem,
    paddingLeft: 2 * rem,
    paddingRight: 2 * rem,
    borderRadius: 0.5 * rem,
  },
  text: {
    fontSize: 3 * rem,
    color: "white",
  }
} as {
  container: ViewS
  text: TextS
}