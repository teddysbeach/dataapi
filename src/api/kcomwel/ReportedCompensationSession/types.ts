export interface ReportedCompensationSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: ReportedCompensationSessionResponseData;
}

export interface ReportedCompensationSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ECODE: string;
    ERRDOC: string;
    ETRACK: string;
    OUTFILE: ReportedCompensationSessionResponseDataOutfile[];
}

export interface ReportedCompensationSessionResponseDataOutfile {
    OUTTYPE: string;
    OUTDATA: string;
}

export interface ReportedCompensationSessionRequest {
    USERNAME: string;
    ADMINNO: string;
    SEARCHYEAR: string;
    OUTPUTDOCU: [];     // {"OUTPUTDOCTYPE" : "EXCEL"}
    LOGINHEADERS: string;
    BIRTHDAY: string;
    INPUTUSERID: string;
}