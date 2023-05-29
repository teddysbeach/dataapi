export interface AcceptOfAppoinmtSoleSessionRequest {
    USERGUBUN: string;
    REGNUMBER: string;
    LOGINHEADERS: string;
    INPUTUSERID: string;
}

export interface AcceptOfAppoinmtSoleSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: AcceptOfAppoinmtSoleSessionResponseData;
}

export interface AcceptOfAppoinmtSoleSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ECODE: string;
    ETRACK: string;
}