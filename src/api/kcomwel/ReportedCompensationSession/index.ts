import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { ReportedCompensationSessionRequest, ReportedCompensationSessionResponse } from "./types";

export async function ReportedCompensationSession(api: DataAPIRequest, data: ReportedCompensationSessionRequest): Promise<ReportedCompensationSessionResponse> {
    data.BIRTHDAY = api.crypto.encrypt(data.BIRTHDAY);
    return api.post(endpoints.ReportedCompensationSession, data);
}
