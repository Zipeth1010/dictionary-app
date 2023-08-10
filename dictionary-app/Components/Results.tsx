import { View, Text, TouchableOpacity, ActivityIndicator } from "react-native";

const ResultsComponent = ({ results }) => {
  return (
    <View>
      <Text>Here are your Definitions!</Text>
      {results?.map(
        (definition: { word: string; definition: string; example: string }) => (
          <SingleResultCard definition={definition} />
        )
      )}
    </View>
  );
};

export default ResultsComponent;
