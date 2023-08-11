import { View, Text } from "react-native";
import styles from "./Answer.styles";

const AnswerComponent = ({ definition }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.answerHeader}>Answer:</Text>
      <Text style={styles.bodyText}>
        {definition.definition}
        {definition.definition !==
          "That word doesn't exist in our Dictionary." &&
        definition.examples === undefined ? (
          <Text style={styles.bodyText}>
            {"\n"}Examples in use: No example given.
          </Text>
        ) : (
          <Text style={styles.bodyText}>
            {"\n"}Example in use: {definition.examples}
          </Text>
        )}
        {definition.definition ===
        "That word doesn't exist in our Dictionary." ? (
          <Text>{definition.definition}</Text>
        ) : null}
      </Text>
    </View>
  );
};

export default AnswerComponent;