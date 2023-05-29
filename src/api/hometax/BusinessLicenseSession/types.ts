export interface BusinessLicenseSessionRequestData {
    OUTPUTDOCUTYPE: string;
}

export interface BusinessLicenseSessionRequest {
    REGNUMBER: string;
    USERGUBUN: string;
    TELNUMBER?: string;
    HPNUMBER?: string;  
    EMAIL?: string;
    JUMINYN: string;
    OUTPUTDOCU: BusinessLicenseSessionRequestData[];
    INPUTUSERID: string;
    LOGINHEADERS: string;
}

export interface BusinessLicenseSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: BusinessLicenseSessionResponseData;
}

export interface BusinessLicenseSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ECODE: string;
    ETRACK: string;
    OUTFILE: BusinessLicenseSessionResponseDataOutfile[];
}

export interface BusinessLicenseSessionResponseDataOutfile {
    OUTTYPE: string;
    OUTDATA: string;
}
