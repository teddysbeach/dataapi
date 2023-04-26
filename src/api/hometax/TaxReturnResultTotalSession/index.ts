import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { TaxReturnResultTotalSessionRequest, TaxReturnResultTotalSessionResponse } from "./types";

export async function TaxReturnResultTotalSession(api: DataAPIRequest, data: TaxReturnResultTotalSessionRequest): Promise<TaxReturnResultTotalSessionResponse> {
    if (data.TXAGNTMGMTPW) data.TXAGNTMGMTPW = api.crypto.encrypt(data.TXAGNTMGMTPW);
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);

    return api.post(endpoints.TaxReturnResultTotalSession, data);
}
