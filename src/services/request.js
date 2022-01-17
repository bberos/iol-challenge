import axios from "axios";
import { API } from "./../config/api";
export const getAllCharactersList = async () => {
  try {
    const response = await axios.get(`${API}/character`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
export const getLimitCharacters = async (charIds) => {
  try {
    const response = await axios.get(`${API}/character/${charIds}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getLocations = async () => {
  try {
    const response = await axios.get(`${API}/location`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};

export const getCharacter = async (chId) => {
  try {
    const response = await axios.get(`${API}/character/${chId}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
