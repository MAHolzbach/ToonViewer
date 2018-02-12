import axios from "axios";

const API_KEY = "sv8x89skdsw9y7t5mmk3n8mrugq6eyyu";
const ROOT_URL = `https://us.api.battle.net/wow/character/`;

export const FETCH_CHAR = "FETCH_CHAR";

export const fetchCharItems = (char, realm) => {
  const url = `${ROOT_URL}${realm}/${char}?fields=items&locale=en_US&apikey=${API_KEY}`;
  const request = axios.get(url);
  console.log(request.data);

  return {
    type: FETCH_CHAR,
    payload: request
  };
};
