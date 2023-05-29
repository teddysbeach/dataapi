import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { TaxAccountantRetrieveRegSessionRequest, TaxAccountantRetrieveRegSessionResponse } from "./types";

export async function TaxAccountantRetrieveRegSession(api: DataAPIRequest, data: TaxAccountantRetrieveRegSessionRequest): Promise<TaxAccountantRetrieveRegSessionResponse> {
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);
    data.CMJUMIN = api.crypto.encrypt(data.CMJUMIN);

    return api.post(endpoints.TaxAccountantRetrieveRegSession, data);
}
