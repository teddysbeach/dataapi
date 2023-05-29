import { AxiosRequestConfig } from 'axios';
import { DataAPICrypto } from '../utils/crypt';
import { LoginSessionSimpleHomeTaxRequest, LoginSessionSimpleHomeTaxResponse } from './hometax/LoginSessionSimpleHomeTax/types';
import { LoginSessionSimpleKComwelResponse } from './kcomwel/LoginSessionSimpleKComwel/types';
export default class DataAPIRequestManager {
    private axiosInstance;
    private token;
    private dataAPICrypto;
    hometaxLoginHeaders?: LoginHeaders;
    kcomwelLoginHeaders?: LoginHeaders;
    hometaxLoginResponse?: LoginSessionSimpleHomeTaxResponse;
    kcomwelLoginResponse?: LoginSessionSimpleKComwelResponse;
    constructor(isTest: boolean, token: string, key: string, iv: string);
    private sendRequest;
    get<T>(endpoint: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(endpoint: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    get crypto(): DataAPICrypto;
    hometaxLoginSessionSimple(data: LoginSessionSimpleHomeTaxRequest): Promise<boolean>;
    hometaxCaptcha(): Promise<boolean>;
}
export interface LoginHeaders {
    LOGINHEADERS: string;
    INPUTUSERID: string;
}
