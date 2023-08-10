import { TouchableOpacity, Text } from "react-native";
import { useState } from "react";

const SingleResultCard = (definition: {
  word: string;
  definition: string;
  examples: string;
}) => {
  const [displayFull, setDisplayFull] = useState(false);

  function setClick() {
    if (displayFull) {
      setDisplayFull(false);
    }
    if (!displayFull) {
      setDisplayFull(true);
    }
  }

  return (
    <TouchableOpacity onPress={setClick}>
      <Text>{definition.word[0].toUpperCase() + definition.word.slice(1)}</Text>
      {displayFull ? (
        <Text>
          Definition: {definition.definition} {"\n"}Example in use:{" "}
          {definition.examples}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default SingleResultCard;
