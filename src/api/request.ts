import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { DataAPICrypto } from '../utils/crypt';

export class DataAPIRequest {
  private axiosInstance: AxiosInstance;
  private token: string;
  private dataAPICrypto: DataAPICrypto;

  constructor(isTest: boolean, token: string, key: string, iv: string) {
    const baseURL = isTest ? 'https://datahub-dev.scraping.co.kr' : 'https://api.mydatahub.co.kr';
    this.dataAPICrypto = new DataAPICrypto(key, iv);
    this.axiosInstance = axios.create({
      baseURL,
    });
    this.token = token;
  }

  private async sendRequest<T>(endpoint: string, method: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    const headers = {
      Authorization: `Token ${this.token}`,
      ...config?.headers 
    }
    const response = await this.axiosInstance.request<T>({
      url: endpoint,
      method: method,
      headers,
      data,
      ...config,
    });

    if (response.status >= 400) {
      throw new Error(`Request failed with status code ${response.status}`);
    }

    return response.data;
  }

  async get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T> {
    return this.sendRequest<T>(endpoint, 'GET', undefined, config);
  }

  async post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T> {
    return this.sendRequest<T>(endpoint, 'POST', data, config);
  }

  get crypto() {
    return this.dataAPICrypto;
  }
}
