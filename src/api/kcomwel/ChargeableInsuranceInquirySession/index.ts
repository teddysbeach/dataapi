import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { ChargeableInsuranceInquirySessionRequest, ChargeableInsuranceInquirySessionResponse } from "./types";

export async function ChargeableInsuranceInquirySession(api: DataAPIRequest,  data: ChargeableInsuranceInquirySessionRequest): Promise<ChargeableInsuranceInquirySessionResponse> {
    data.BIRTHDAY = api.crypto.encrypt(data.BIRTHDAY);
    return api.post(endpoints.ChargeableInsuranceInquirySession, data);
}
