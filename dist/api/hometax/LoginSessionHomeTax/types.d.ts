export interface LoginSessionHomeTaxResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: LoginSessionHomeTaxResponseData;
}
export interface LoginSessionHomeTaxResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ECODE: string;
    ETRACK: string;
    LOGINHEADERS: string;
    INPUTUSERID: string;
}
export interface LoginSessionHomeTaxRequest {
    TXAGNTMGMTNO?: string;
    TXAGNTMGMTPW?: string;
    USERGUBUN: string;
    P_CERTNAME: string;
    P_CERTPWD: string;
    P_SIGNCERT_DER: string;
    P_SIGNPRI_KEY: string;
}
