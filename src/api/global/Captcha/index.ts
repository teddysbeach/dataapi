import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { CaptchaResponse } from "./types";

export async function Captcha<T>(api: DataAPIRequest, data: CaptchaResponse): Promise<T>{
    const _data = { 
        callbackId: data.data.callbackId, 
        callbackType: data.data.callbackType 
    } as T;
    return api.post(endpoints.Captcha, _data);
}