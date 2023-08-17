import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "90%",
    alignItems: "center",
    fontSize: SIZES.xLarge,
    backgroundColor: COLORS.white,
    padding: 5,
    borderBottomEndRadius: 30,
    borderBottomLeftRadius: 30,
    marginBottom: 10,
    borderWidth: 1,
  },
  answerHeader: {
    fontSize: SIZES.xLarge,
    padding: 4,
    color: COLORS.tertiary,
    fontWeight: "bold",
  },
  bodyText: {
    fontSize: SIZES.medium,
    alignItems: "center",
    marginBottom: 15,
    textAlign: "center",
  },
  answerContainer: {
    width: 30,
    height: 30,
    backgroundColor: COLORS.white,
    borderWidth: 1,
    borderRadius: 15,
  },
  image: {
    width: 30,
    height: 30,
  },
});

export default styles;
