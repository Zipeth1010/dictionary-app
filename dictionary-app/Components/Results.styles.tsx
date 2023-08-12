import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  resultsHeaderWrapper: {
    backgroundColor: COLORS.white,
    padding: 10,
    borderRadius: 15,
    marginBottom: 5,
    borderWidth: 1,
  },
  resultsHeader: {
    fontSize: SIZES.large,
    textAlign: "center",
    fontWeight: "bold",
    color: COLORS.tertiary,
  },
  resultButton: {
    backgroundColor: COLORS.tertiary,
    padding: 20,
    margin: 10,
    borderRadius: 50,
    alignContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: COLORS.black,
    width: "75%",
  },
  resultHeader: {
    color: COLORS.white,
    fontWeight: "bold",
    fontSize: SIZES.medium,
  },
  resultBody: {
    color: COLORS.white,
    textAlign: "center",
  },
  voiceDemo: {
    backgroundColor: COLORS.white,
    color: COLORS.tertiary,
    borderWidth: 1,
    padding: 5,
    borderRadius: 5,
    margin: 10,
  },
});

export default styles;
