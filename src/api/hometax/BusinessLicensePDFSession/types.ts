export interface BusinessLicensePDFSessionRequestData {
    OUTPUTDOCUTYPE: string;
}

export interface BusinessLicensePDFSessionRequest {
    REGNUMBER: string;
    USERGUBUN: string;
    TELNUMBER?: string;
    HPNUMBER?: string;  
    EMAIL?: string;
    JUMINYN: string;
    OUTPUTDOCU: BusinessLicensePDFSessionRequestData[];
    INPUTUSERID: string;
    LOGINHEADERS: string;
}

export interface BusinessLicensePDFSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: BusinessLicensePDFSessionResponseData;
}

export interface BusinessLicensePDFSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ECODE: string;
    ETRACK: string;
    OUTFILE: BusinessLicensePDFSessionResponseDataOutfile[];
}

export interface BusinessLicensePDFSessionResponseDataOutfile {
    OUTTYPE: string;
    OUTDATA: string;
}
