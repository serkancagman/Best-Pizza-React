import axios from "axios";
export const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
  return response.data;

};
