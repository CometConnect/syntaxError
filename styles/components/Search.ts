import { ImageS, rem, TextS, ViewS } from "../../types"

export default {
  box: {
    borderRadius: 24,
    borderWidth: 4,
    borderColor: "#C04B26",
    height: 5 * rem,
    width: "80%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    alignSelf: "center",
    paddingRight: 3 * rem,
    paddingLeft: 3 * rem,
    paddingTop: 2 * rem,
    paddingBottom: 2 * rem,
    marginBottom: 1 * rem,
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
  box: ViewS
  placeHolder: TextS
  logo: ImageS
}