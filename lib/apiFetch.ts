import { AxiosRequestConfig } from "axios";
import axiosInstance from "./api";

export async function apiFetch<T>(
    url: string,
    config?: AxiosRequestConfig
  ): Promise<T> {
    const response = await axiosInstance.request<T>({
      url,
      ...config,
    });
  
    return response.data;
  }
  