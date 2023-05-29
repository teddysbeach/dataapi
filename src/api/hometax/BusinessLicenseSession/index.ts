import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { BusinessLicenseSessionRequest, BusinessLicenseSessionResponse } from "./types";

export async function BusinessLicenseSession(api: DataAPIRequest, data: BusinessLicenseSessionRequest): Promise<BusinessLicenseSessionResponse> {
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);

    return api.post(endpoints.BusinessLicenseSession, data);
}
