import axios from "axios";

const AxiosInstance = axios.create({
  baseURL: "http://localhost:1337/api",
  timeout: 1000,
});

export const GetStrapiData = async (url) => {
  const res = await AxiosInstance.get(url);
  return res.data;
};
