import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
  ScrollView,
  ImageBackground,
  Dimensions,
} from "react-native";
import { useState } from "react";
import SearchComponent from "./Components/SearchComponent";
import ResultsComponent from "./Components/Results";
import AnswerComponent from "./Components/Answer";
import LoadingComponent from "./Components/Loading";
import * as Speech from "expo-speech";

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
      <ImageBackground
        source={PlaceholderImage}
        style={styles.backgroundImage}
      />

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
        {definition.word !== "" ? (
          <AnswerComponent
            setDefinition={setDefinition}
            definition={definition}
          />
        ) : null}
      </View>
      <ScrollView>
        <View>
          {isLoading ? (
            <LoadingComponent />
          ) : results.length > 0 ? (
            <ResultsComponent setResults={setResults} results={results} />
          ) : null}
        </View>

        <StatusBar style="auto" />
      </ScrollView>
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
    justifyContent: "center",
    paddingTop: 0,
  },
  backgroundImage: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: -1,
  },
});
