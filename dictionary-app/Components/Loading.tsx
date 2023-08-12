import { StyleSheet, Text, View } from "react-native";
import { COLORS, FONT, SIZES } from "../constants/theme";

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.loadingText}>Loading</Text>
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
  },
  loadingText: {
    color: COLORS.tertiary,
  },
});
