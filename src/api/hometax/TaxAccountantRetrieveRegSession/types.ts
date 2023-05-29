export interface TaxAccountantRetrieveRegSessionRequest {
    USERGUBUN: string;
    REGNUMBER: string;
    SAUPJAGUBUN: string;
    CMJUMIN: string;
    TELNUMBER: string;
    HPNUMBER: string;
    EMAIL: string;
    TAXINFOALWHP: string;
    TAXINFOALWEM: string;
    APPODATE: string;
    INFOACCRO: string;
    INPUTUSERID: string;
    LOGINHEADERS: string;
}

export interface TaxAccountantRetrieveRegSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: TaxAccountantRetrieveRegSessionResponseData;
}

export interface TaxAccountantRetrieveRegSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ETRACK: string;
    ECODE: string;
}