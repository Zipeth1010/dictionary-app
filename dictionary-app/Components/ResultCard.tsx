import { TouchableOpacity, Text, TouchableHighlight } from "react-native";
import { useState, useEffect } from "react";
import styles from "./Results.styles";
import * as Speech from "expo-speech";

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

  // function handleVoice() {
  //   Speech.speak(definition.word);
  // }

  return (
    <TouchableOpacity onPress={setClick} style={styles.resultButton}>
      <Text style={styles.resultHeader}>
        {definition.word[0].toUpperCase() + definition.word.slice(1)}
      </Text>
      {displayFull ? (
        <Text style={styles.resultBody}>
          {definition.definition} {"\n"}
          {definition.examples === undefined ? null : (
            <Text>Example in use: {definition.examples}</Text>
          )}
          {/* <TouchableHighlight onPress={handleVoice}>
            <Text style={styles.voiceDemo}>Voice Demo</Text>
          </TouchableHighlight> */}
        </Text>
      ) : null}
    </TouchableOpacity>
  );
};

export default SingleResultCard;
