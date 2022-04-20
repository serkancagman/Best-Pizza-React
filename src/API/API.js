import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    const { origin } = new URL(config.url);

    const allowedOrigins = [process.env.REACT_APP_API_URL];

    const token = localStorage.getItem("access-token");
    if (allowedOrigins.includes(origin)) {
      config.headers.authorization = token;
    }

    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

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
};

export const userRegister = async (data) => {
  const response = await axios.post(
    `${process.env.REACT_APP_API_URL}/auth/register`,
    data
  );
  return response.data;
};

export const getMe = async () => {
  const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/auth/me`);
  return data;
};

export const userLogout = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/auth/logout`
  ,{
    refreshToken: localStorage.getItem("refresh-token")
  });
  return data;
}
  
// Order 
export const takeOrder = async (inputs) => {
  const { data } = await axios.post(
    `${process.env.REACT_APP_API_URL}/order`,
    inputs
  );
  return data;
}
export const myOrders = async () => {
  const { data } = await axios.get(
    `${process.env.REACT_APP_API_URL}/order/my-orders`
  );
  return data;
}