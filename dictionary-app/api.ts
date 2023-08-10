import axios from "axios";

const dictionaryApi = axios.create({
  baseURL: "https://api.dictionaryapi.dev/api/v2/entries/en",
});

let returnObj = {
  word: "",
  definition: "",
  examples: "",
};

export const getDefinition = (endpoint: string) => {
  return dictionaryApi
    .get(`/${endpoint}`)
    .then(({ data }) => {
      returnObj.word = data[0].word;
      returnObj.definition = data[0].meanings[0].definitions[0].definition;
      returnObj.examples = data[0].meanings[0].definitions[0].example;
      return returnObj;
    })
    .catch((err) => {
      console.log(err);
    });
};
