export interface LoginSessionSimpleKComwelResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: LoginSessionSimpleKComwelResponseData;
}

export interface LoginSessionSimpleKComwelResponseData {
    RESULT: string;
    ERRMSG: string;
    ECODE: string;
    ERRDOC: string;
    ETRACK: string;
    LOGINHEADERS: string;
    BIRTHDAY: string;
    USERNAME: string;
    INPUTUSERID: string;
}

export interface LoginSessionSimpleKComwelRequest {
    USERGUBUN: string;
    SUBCUSKIND: string;
    USERNAME: string;
    LOGINOPTION: string;
    JUMINNUM: string;
    HPNUMBER: string;
}

