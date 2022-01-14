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
export const get15Characters = async (charIds) => {
  try {
    const response = await axios.get(`${API}/character/${charIds}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
};
