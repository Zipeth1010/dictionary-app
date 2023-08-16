import { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image } from "react-native";
import styles from "./Search.style";
import * as api from "../api";

const SearchComponent = ({
  searchTerm,
  setSearchTerm,
  setResults,
  results,
  setIsLoading,
  setDefinition,
}) => {
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await api.getDefinition(searchTerm);
      const newResults = [result, ...results];
      if (results.length < 1 && result !== undefined) {
        setResults([result]);
        setDefinition(result);
      } else if (result === undefined) {
        setDefinition({
          word: searchTerm,
          definition: "That word doesn't exist in our Dictionary.",
          examples: "",
        });
      } else {
        setResults(newResults);
        setDefinition(result);
      }

      setIsLoading(false);
      setSearchTerm("");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <View style={styles.componentContainer}>
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
