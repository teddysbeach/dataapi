export interface LoginSessionSimpleResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: LoginSessionSimpleResponseData;
}
export interface LoginSessionSimpleResponseData {
    ETRACK: string;
    ERRMSG: string;
    INPUTUSERID: string;
    ECODE: string;
    ERRDOC: string;
    RESULT: string;
    LOGINHEADERS: string;
}
export interface LoginSessionSimpleRequest {
    TXAGNTMGMTNO?: string;
    TXAGNTMGMTPW?: string;
    USERGUBUN: string;
    LOGINOPTION: string;
    TELECOMGUBUN?: string;
    JUMINNUM: string;
    USERNAME: string;
    HPNUMBER: string;
}
