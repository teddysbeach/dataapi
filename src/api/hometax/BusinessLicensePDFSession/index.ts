import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { BusinessLicensePDFSessionRequest, BusinessLicensePDFSessionResponse } from "./types";

export async function BusinessLicensePDFSession(api: DataAPIRequest, data: BusinessLicensePDFSessionRequest): Promise<BusinessLicensePDFSessionResponse> {
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);

    return api.post(endpoints.BusinessLicensePDFSession, data);
}
