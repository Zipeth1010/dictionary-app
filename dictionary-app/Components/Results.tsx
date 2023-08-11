import { View, Text, TouchableOpacity } from "react-native";
import SingleResultCard from "./ResultCard";
import styles from "./Results.styles";

const ResultsComponent = ({ results }) => {
  return (
    <View style={styles.container}>
      <View style={styles.resultsHeaderWrapper}>
        <Text style={styles.resultsHeader}>Past Definition Searches:</Text>
      </View>
      {results.map(
        (
          definition: { word: string; definition: string; examples: string },
          i: any
        ) => (
          <SingleResultCard key={i} {...definition} />
        )
      )}
    </View>
  );
};

export default ResultsComponent;
