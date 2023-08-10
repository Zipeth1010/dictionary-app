import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import { useState } from "react";
import SearchComponent from "./Components/SearchComponent";
import ResultsComponent from "./Components/Results";

const PlaceholderImage = require("./assets/Background.png");

export default function App() {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [definition, setDefinition] = useState<{
    word: string;
    definition: string;
    examples: string;
  }>({ word: "", definition: "", examples: "" });
  const [results, setResults] = useState<
    {
      word: string;
      definition: string;
      examples: string;
    }[]
  >([]);

  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image source={PlaceholderImage} style={styles.image} />
      </View>
      <View>
        <SearchComponent
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          setResults={setResults}
          results={results}
          setIsLoading={setIsLoading}
          setDefinition={setDefinition}
        />
      </View>

      <View>
        {isLoading ? (
          <Text>Loading...</Text>
        ) : (
          <ResultsComponent results={results} />
        )}
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    flex: 1,
    paddingTop: 0,
  },
  image: {
    width: 400,
    height: 800,
    borderRadius: 18,
  },
});
