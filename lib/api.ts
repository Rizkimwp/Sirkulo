import axios, { AxiosError, AxiosRequestConfig } from "axios";
import { showToast } from "./toast";

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use(
  (config) => {
    if (typeof window !== "undefined") {
      const token = localStorage.getItem("access_token");
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  (error: AxiosError<any>) => {
    const message =
      error.response?.data?.message || error.message || "API Error";
      showToast.error("Email atau password salah");

    return Promise.reject(new Error(message));
  }
);

export default axiosInstance;
