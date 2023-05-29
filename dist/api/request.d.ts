import { AxiosRequestConfig } from 'axios';
import { DataAPICrypto } from '../utils/crypt';
export declare class DataAPIRequest {
    private axiosInstance;
    private token;
    private dataAPICrypto;
    constructor(isTest: boolean, token: string, key: string, iv: string);
    private sendRequest;
    get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    get crypto(): DataAPICrypto;
}
