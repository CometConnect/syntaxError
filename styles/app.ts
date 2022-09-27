import { ImageS, rem, ViewS } from "../types"

export default {
  container: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#151515',
    width: "100%",
  },
  nav: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "center",
    backgroundColor: "#1f1f1f",
    borderWidth: 4,
    borderColor: "#C04B26",
    height: 5 * rem,
  },
  item: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  itemHover: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#3f3f3f",
  },
  icon: {
    width: 50,
    height: 50,
  },
} as {
  container: ViewS;
  screen: ViewS;
  nav: ViewS;
  item: ViewS;
  itemHover: ViewS;
  icon: ImageS;
};