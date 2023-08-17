import { View, Text, Image, TouchableOpacity } from "react-native";
import styles from "./Answer.styles";

const AnswerComponent = ({ setDefinition, definition }) => {
  const handleClear = () => {
    setDefinition({ word: "", definition: "", examples: "" });
  };

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
      <TouchableOpacity style={styles.answerContainer} onPress={handleClear}>
        <Image
          source={require("../assets/icons/clear.png")}
          style={styles.image}
        />
      </TouchableOpacity>
    </View>
  );
};

export default AnswerComponent;
