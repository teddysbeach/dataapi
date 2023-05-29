import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { AcceptOfAppoinmtSoleSessionRequest, AcceptOfAppoinmtSoleSessionResponse } from "./types";

export async function AcceptOfAppoinmtSoleSession(api: DataAPIRequest, data: AcceptOfAppoinmtSoleSessionRequest): Promise<AcceptOfAppoinmtSoleSessionResponse> {
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);
    return api.post(endpoints.AcceptOfAppoinmtSoleSession, data);
}
