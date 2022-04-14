import axios from "axios";
export const getProducts = async () => {
  const response = await axios.get(`${process.env.REACT_APP_API_URL}/product`);
  return response.data;
};

export const userLogin = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/login`,
    data
  );
  return response.data;
}

export const userRegister = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    data
  );
  return response.data;
}
