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
}) => {
  const handleSubmit = async () => {
    setIsLoading(true);
    try {
      const result = await api.getDefinition(searchTerm);
      console.log(results);

      if (results.length < 1) {
        setResults([result]);
      } else {
        setResults([result, ...results]);
      }
      setIsLoading(false);
      setSearchTerm("");
    } catch (error) {
    } finally {
      setIsLoading(false);
    }
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
