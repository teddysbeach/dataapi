export interface LoginSessionSimpleHomeTaxResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: LoginSessionSimpleHomeTaxResponseData;
}

export interface LoginSessionSimpleHomeTaxResponseData {
    ETRACK: string;
    ERRMSG: string;
    INPUTUSERID: string;
    ECODE: string;
    ERRDOC: string;
    RESULT: string;

    LOGINHEADERS: string;
}

export interface LoginSessionSimpleHomeTaxRequest {
    TXAGNTMGMTNO?: string;
    TXAGNTMGMTPW?: string;
    USERGUBUN: string;
    LOGINOPTION: string;
    TELECOMGUBUN?: string;
    JUMINNUM: string;
    USERNAME: string;
    HPNUMBER: string;
}

