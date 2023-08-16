import { View, Text } from "react-native";
import styles from "./Answer.styles";

const AnswerComponent = ({ definition }) => {
  console.log(definition.definition);
  return (
    <View style={styles.container}>
      <Text style={styles.answerHeader}>Answer:</Text>
      <Text style={styles.bodyText}>
        {definition.definition}
        {definition.definition ===
        "That word doesn't exist in our Dictionary." ? null : definition.definition !==
            "That word doesn't exist in our Dictionary." &&
          definition.examples === undefined ? (
          <Text style={styles.bodyText}>
            {"\n"}Examples in use: No example given.
          </Text>
        ) : null}
      </Text>
    </View>
  );
};

export default AnswerComponent;
