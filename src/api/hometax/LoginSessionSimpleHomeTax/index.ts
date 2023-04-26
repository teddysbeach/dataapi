import { endpoints } from "../../endpoints";
import { CaptchaResponse } from "../../global/Captcha/types";
import { DataAPIRequest } from "../../request";
import { LoginSessionSimpleHomeTaxRequest  } from "./types";

export async function LoginSessionSimpleHomeTax(api: DataAPIRequest, data: LoginSessionSimpleHomeTaxRequest): Promise<CaptchaResponse> {
    data.JUMINNUM = api.crypto.encrypt(data.JUMINNUM);
    return api.post(endpoints.LoginSessionSimpleHomeTax, data);
}
