import { endpoints } from "../../endpoints";
import { DataAPIRequest } from "../../request";
import { SearchAdminnoRequest, SearchAdminnoResponse } from "./types";

export async function SearchAdminno(
        api: DataAPIRequest, 
        data: SearchAdminnoRequest
    ): Promise<SearchAdminnoResponse> {
    data.REGNUMBER = api.crypto.encrypt(data.REGNUMBER);
    return api.post(endpoints.SearchAdminno, data);
}
