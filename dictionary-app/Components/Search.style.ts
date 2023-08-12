import { StyleSheet } from "react-native";

import { COLORS, FONT, SIZES } from "../constants/theme";

const styles = StyleSheet.create({
  container: {
    width: "100%",
  },
  componentContainer: {
    backgroundColor: COLORS.white,
    padding: 8,
    width: 380,
    borderBottomEndRadius: 30,
    borderTopLeftRadius: 30,
    marginTop: 30,
    marginBottom: 10,
    borderWidth: 1,
  },
  userName: {
    fontSize: SIZES.large,
    color: COLORS.secondary,
  },
  welcomeMessage: {
    fontSize: SIZES.xLarge,
    fontWeight: "bold",
    alignItems: "center",
    alignSelf: "center",
    color: COLORS.tertiary,
    marginTop: 2,
  },
  searchContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: SIZES.large,
    height: 50,
  },
  searchWrapper: {
    flex: 1,
    backgroundColor: COLORS.white,
    marginRight: SIZES.small,
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#000000",
    borderRadius: SIZES.medium,
    height: "100%",
    borderWidth: 1,
  },
  searchInput: {
    fontFamily: FONT.regular,
    width: "100%",
    height: "100%",
    paddingHorizontal: SIZES.medium,
  },
  searchBtn: {
    width: 50,
    height: "100%",
    backgroundColor: COLORS.tertiary,
    borderRadius: SIZES.medium,
    justifyContent: "center",
    alignItems: "center",
  },
  searchBtnImage: {
    width: "50%",
    height: "50%",
    tintColor: COLORS.white,
  },
  tabsContainer: {
    width: "100%",
    marginTop: SIZES.medium,
  },
});

export default styles;
