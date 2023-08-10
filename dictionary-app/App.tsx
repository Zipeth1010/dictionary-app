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
import useFetch from "./api";
import ResultsComponent from "./Components/Results";

const PlaceholderImage = require("./assets/Background.png");

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [definition, setDefinition] = useState("");
  const [results, setResults] = useState([]);

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
        />
      </View>
      <View>
        <ResultsComponent />
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
