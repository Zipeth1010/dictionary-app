import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";
import styles from "./Search.style";
import * as api from "../api";

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  setResults,
  results,
}) => {
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    api.getDefinition(searchTerm).then((result) => {
      if (results.length < 1) {
        setResults([result]);
      } else {
        let pureResults = [...results, result];
        setResults(pureResults);
      }
    });
    console.log(results);
    setSearchTerm("");
    setIsLoading(false);
  };

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.welcomeMessage}>Find the Definition Here!</Text>
      </View>

      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            onChangeText={(value) => {
              setSearchTerm(value);
            }}
            placeholder="Search Definition!"
          />
        </View>
        <TouchableOpacity style={styles.searchBtn} onPress={handleSubmit}>
          <Image
            source={require("../assets/icons/search.png")}
            resizeMode="contain"
            style={styles.searchBtnImage}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default SearchComponent;
