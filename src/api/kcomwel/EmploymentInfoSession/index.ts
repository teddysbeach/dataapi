import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { EmploymentInfoSessionRequest, EmploymentInfoSessionResponse  } from "./types";

export async function EmploymentInfoSession(api: DataAPIRequest, data: EmploymentInfoSessionRequest): Promise<EmploymentInfoSessionResponse> {
    data.BIRTHDAY = api.crypto.encrypt(data.BIRTHDAY);
    return api.post(endpoints.EmploymentInfoSession, data);
}
