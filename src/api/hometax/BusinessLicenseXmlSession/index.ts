import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { BusinessLicenseXmlSessionRequest, BusinessLicenseXmlSessionResponse } from "./types";

export async function BusinessLicenseXmlSession(api: DataAPIRequest, data: BusinessLicenseXmlSessionRequest): Promise<BusinessLicenseXmlSessionResponse> {
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);

    return api.post(endpoints.BusinessLicenseXmlSession, data);
}
