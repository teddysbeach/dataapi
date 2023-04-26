export interface EmploymentInfoSessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: EmploymentInfoSessionResponseData;
}
export interface EmploymentInfoSessionResponseData {
    RESULT: string;
    ERRMSG: string;
    ECODE: string;
    ERRDOC: string;
    ETRACK: string;
    OUTFILE: EmploymentInfoSessionResponseDataOutfile[];
}
export interface EmploymentInfoSessionResponseDataOutfile {
    OUTTYPE: string;
    OUTDATA: string;
}
export interface EmploymentInfoSessionRequest {
    USERNAME: string;
    ADMINNO: string;
    OUTPUTDOCU: [];
    LOGINHEADERS: string;
    BIRTHDAY: string;
    INPUTUSERID: string;
}
