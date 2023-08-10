import { View, Text, TouchableOpacity } from "react-native";
import SingleResultCard from "./ResultCard";

const ResultsComponent = ({ results }) => {
  return (
    <View>
      <Text>Here are your Past Definition Searches!</Text>
      {results.map(
        (
          definition: { word: string; definition: string; example: string },
          i: any
        ) => (
          <SingleResultCard key={i} {...definition} />
        )
      )}
    </View>
  );
};

export default ResultsComponent;
