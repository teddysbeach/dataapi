import { DataAPIRequest } from "../../request";
import { CaptchaResponse } from "./types";
export declare function Captcha<T>(api: DataAPIRequest, data: CaptchaResponse): Promise<T>;
