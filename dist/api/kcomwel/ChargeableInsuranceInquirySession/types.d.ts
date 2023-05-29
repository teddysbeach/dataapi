interface ChargeableInsuranceInquirySessionResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: ChargeableInsuranceInquirySessionData;
}
interface ChargeableInsuranceInquirySessionData {
    RESULT: string;
    ERRMSG: string;
    ECODE: string;
    ERRDOC: string;
    ETRACK: string;
    NTCINSPRMLIST: ChargeableInsuranceInquirySessionNTCINSPRMLISTItem[];
}
interface ChargeableInsuranceInquirySessionNTCINSPRMLISTItem {
    INSYEAR: string;
    REGNUM: string;
    SAEOPJANGINFO: ChargeableInsuranceInquirySessionSAEOPJANGINFO;
    GEUNROJAINFO: ChargeableInsuranceInquirySessionGEUNROJAINFO;
    GEUNROJANTCINSPRMINFO: ChargeableInsuranceInquirySessionGEUNROJANTCINSPRMINFO;
}
interface ChargeableInsuranceInquirySessionSAEOPJANGINFO {
    ADMINNO: string;
    HOISAMYUNG: string;
    PRENAME: string;
    JUSO: string;
}
interface ChargeableInsuranceInquirySessionGEUNROJAINFO {
    USERNAME: string;
    BIRTHDAY: string;
    GEUNROJAGUBUN: string;
    SJBJAGYEOKCHWIDEUKDT: string;
    SJBJAGYEOKSANGSILDT: string;
    SJBJEONGEUNDT: string;
    GYBJAGYEOKCHWIDEUKDT: string;
    GYBJAGYEOKSANGSILDT: string;
    GYBJEONGEUNDT: string;
}
interface ChargeableInsuranceInquirySessionGEUNROJANTCINSPRMINFO {
    GYINFOLIST: ChargeableInsuranceInquirySessionGYINFOLISTItem[];
}
interface ChargeableInsuranceInquirySessionGYINFOLISTItem {
    INSMNTHL: string;
    SANJENGSGBOSUAK: string;
    SANJENGGAJNBOSUAK: string;
    GYMMAVGBOSUPRC: string;
    GEUNMUILSU: string;
    SGGEUNROJABUDAMBHR: string;
    SGSAEOPJABUDAMBHR: string;
    GAJNBHR: string;
}
interface ChargeableInsuranceInquirySessionRequest {
    USERNAME: string;
    SUBCUSKIND: string;
    STARTDATE: string;
    ENDDATE: string;
    LOGINHEADERS: string;
    BIRTHDAY: string;
    INPUTUSERID: string;
}
export { ChargeableInsuranceInquirySessionResponse, ChargeableInsuranceInquirySessionData, ChargeableInsuranceInquirySessionNTCINSPRMLISTItem, ChargeableInsuranceInquirySessionSAEOPJANGINFO, ChargeableInsuranceInquirySessionGEUNROJAINFO, ChargeableInsuranceInquirySessionGEUNROJANTCINSPRMINFO, ChargeableInsuranceInquirySessionGYINFOLISTItem, ChargeableInsuranceInquirySessionRequest, };
