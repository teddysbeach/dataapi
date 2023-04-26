import { endpoints } from "../../endpoints";
import { CaptchaResponse } from "../../global/Captcha/types";
import { DataAPIRequest } from "../../request";
import { LoginSessionSimpleKComwelRequest  } from "./types";

export async function LoginSessionSimpleKComwel(api: DataAPIRequest, data: LoginSessionSimpleKComwelRequest): Promise<CaptchaResponse> {
    data.JUMINNUM = api.crypto.encrypt(data.JUMINNUM);
    return api.post(endpoints.LoginSessionSimpleKComwel, data);
}
