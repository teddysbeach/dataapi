import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { LoginSessionHomeTaxRequest, LoginSessionHomeTaxResponse  } from "./types";

export async function LoginSessionHomeTax(api: DataAPIRequest, data: LoginSessionHomeTaxRequest): Promise<LoginSessionHomeTaxResponse> {
    data.P_CERTPWD = api.crypto.encrypt(data.P_CERTPWD);
    if(data?.TXAGNTMGMTPW) data.TXAGNTMGMTPW = api.crypto.encrypt(data.TXAGNTMGMTPW);
    return api.post(endpoints.LoginSessionHomeTax, data);
}
