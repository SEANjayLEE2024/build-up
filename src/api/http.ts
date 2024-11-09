import axios, { AxiosRequestConfig } from "axios";

const BASE_URL = "http://localhost:5005";

const createClient = (config?: AxiosRequestConfig) => {
  const axiosInstance = axios.create({
    baseURL: BASE_URL,
    headers: {
      "Content-Type": "application/json",
      ...config?.headers,
    },
    withCredentials: true,
    ...config,
  });

  return axiosInstance;
};

export const httpClient = createClient();
