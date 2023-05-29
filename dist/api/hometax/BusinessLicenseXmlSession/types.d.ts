export interface BusinessLicenseXmlSessionRequestData {
    OUTPUTDOCUTYPE: string;
}
export interface BusinessLicenseXmlSessionRequest {
    REGNUMBER: string;
    USERGUBUN: string;
    TELNUMBER?: string;
    HPNUMBER?: string;
    EMAIL?: string;
    JUMINYN: string;
    OUTPUTDOCU: BusinessLicenseXmlSessionRequestData[];
    INPUTUSERID: string;
    LOGINHEADERS: string;
}
export interface BusinessLicenseXmlSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: BusinessLicenseXmlSessionResponseData;
}
export interface BusinessLicenseXmlSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ECODE: string;
    ETRACK: string;
    OUTFILE: BusinessLicenseXmlSessionResponseDataOutfile[];
}
export interface BusinessLicenseXmlSessionResponseDataOutfile {
    OUTTYPE: string;
    OUTDATA: string;
}
