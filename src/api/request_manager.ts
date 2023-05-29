import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import { DataAPICrypto } from '../utils/crypt';
import { LoginSessionSimpleHomeTaxRequest, LoginSessionSimpleHomeTaxResponse } from './hometax/LoginSessionSimpleHomeTax/types';
import { endpoints } from './endpoints';
import { LoginSessionSimpleKComwelResponse } from './kcomwel/LoginSessionSimpleKComwel/types';

export class DataAPIRequestManager {
  private axiosInstance: AxiosInstance;
  private token: string;
  private dataAPICrypto: DataAPICrypto;

  public hometaxLoginHeaders?: LoginHeaders;
  public kcomwelLoginHeaders?: LoginHeaders;

  public hometaxLoginResponse?: LoginSessionSimpleHomeTaxResponse;
  public kcomwelLoginResponse?: LoginSessionSimpleKComwelResponse;

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

  async hometaxLoginSessionSimple(data: LoginSessionSimpleHomeTaxRequest) {
    data.JUMINNUM = this.crypto.encrypt(data.JUMINNUM);
    const res = await this.post(endpoints.LoginSessionSimpleHomeTax, data);
    this.hometaxLoginResponse = res as LoginSessionSimpleHomeTaxResponse;
    return true;
  }

  async hometaxCaptcha() {
    if (!this.hometaxLoginResponse) {
      throw new Error('hometaxLoginResponse is undefined');
    }
    const res = await this.get(endpoints.Captcha, this.hometaxLoginResponse) as any;
    this.hometaxLoginHeaders = { LOGINHEADERS: res.LOGINHEADERS, INPUTUSERID: res.INPUTUSERID };
    return true;
  }
}


export interface LoginHeaders { 
  LOGINHEADERS: string;
  INPUTUSERID: string;
}