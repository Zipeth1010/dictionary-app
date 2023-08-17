import { View, Text, TouchableOpacity, Image } from "react-native";
import SingleResultCard from "./ResultCard";
import styles from "./Results.styles";

const ResultsComponent = ({ setResults, results }) => {
  const handleClear = () => {
    setResults([]);
  };

  return (
    <View style={styles.container}>
      <View style={styles.resultsHeaderWrapper}>
        <Text style={styles.resultsHeader}>Past Definition Searches:</Text>
      </View>
      <TouchableOpacity style={styles.imageContainer} onPress={handleClear}>
        <Image
          source={require("../assets/icons/clear.png")}
          style={styles.clearImage}
        />
      </TouchableOpacity>
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
