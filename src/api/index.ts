import { endpoints } from "./endpoints";
import { DataAPICrypto  } from "../utils/crypt";
import { DataAPIRequest } from "./request";

import { Captcha } from "./global/Captcha";
import { CaptchaRequest, CaptchaResponse, CaptchaResponseData } from "./global/Captcha/types";

import { LoginSessionSimpleHomeTax } from "./hometax/LoginSessionSimpleHomeTax";
import { LoginSessionSimpleHomeTaxRequest, LoginSessionSimpleHomeTaxResponse } from "./hometax/LoginSessionSimpleHomeTax/types";

import { LoginSessionHomeTax } from "./hometax/LoginSessionHomeTax";
import { LoginSessionHomeTaxRequest, LoginSessionHomeTaxResponse } from "./hometax/LoginSessionHomeTax/types";

import { LoginSessionSimpleKComwel  } from "./kcomwel/LoginSessionSimpleKComwel";
import { LoginSessionSimpleKComwelRequest, LoginSessionSimpleKComwelResponse } from "./kcomwel/LoginSessionSimpleKComwel/types";

import { TaxReturnResultTotalSession } from "./hometax/TaxReturnResultTotalSession";
import { TaxReturnResultTotalSessionRequest, TaxReturnResultTotalSessionResponse } from "./hometax/TaxReturnResultTotalSession/types";

import { TaxAccountantRetrieveRegSession } from "./hometax/TaxAccountantRetrieveRegSession";
import { TaxAccountantRetrieveRegSessionRequest, TaxAccountantRetrieveRegSessionResponse } from "./hometax/TaxAccountantRetrieveRegSession/types";

import { AcceptOfAppoinmtSoleSession } from "./hometax/AcceptOfAppoinmtSoleSession";
import { AcceptOfAppoinmtSoleSessionRequest, AcceptOfAppoinmtSoleSessionResponse } from "./hometax/AcceptOfAppoinmtSoleSession/types";

import { BusinessLicensePDFSession } from "./hometax/BusinessLicensePDFSession";
import { BusinessLicensePDFSessionRequest, BusinessLicensePDFSessionResponse } from "./hometax/BusinessLicensePDFSession/types";

import { ReportedCompensationSession } from "./kcomwel/ReportedCompensationSession";
import { ReportedCompensationSessionRequest, ReportedCompensationSessionResponse } from "./kcomwel/ReportedCompensationSession/types";

import { EmploymentInfoSession } from "./kcomwel/EmploymentInfoSession";
import { EmploymentInfoSessionRequest, EmploymentInfoSessionResponse } from "./kcomwel/EmploymentInfoSession/types";

import { ChargeableInsuranceInquirySession } from "./kcomwel/ChargeableInsuranceInquirySession";
import { ChargeableInsuranceInquirySessionRequest, ChargeableInsuranceInquirySessionResponse } from "./kcomwel/ChargeableInsuranceInquirySession/types";

import { SearchAdminno } from "./kcomwel/SearchAdminno";
import { SearchAdminnoRequest, SearchAdminnoResponse } from "./kcomwel/SearchAdminno/types";
import BRANCHES from "../utils/branches";

export { 
    endpoints, 
    DataAPICrypto,

    /* Hometax */
    LoginSessionSimpleHomeTax,
    LoginSessionHomeTax,
    TaxReturnResultTotalSession,
    TaxAccountantRetrieveRegSession,
    AcceptOfAppoinmtSoleSession,
    BusinessLicensePDFSession,
    
    /* Kcomwel */
    EmploymentInfoSession,
    LoginSessionSimpleKComwel,
    ReportedCompensationSession,
    ChargeableInsuranceInquirySession,
    SearchAdminno,

    /* Captcha */
    Captcha,

    /* Utils */
    BRANCHES
}

export type {
    /* Hometax */
    LoginSessionSimpleHomeTaxRequest,
    LoginSessionSimpleHomeTaxResponse,

    LoginSessionHomeTaxRequest,
    LoginSessionHomeTaxResponse,

    TaxReturnResultTotalSessionRequest,
    TaxReturnResultTotalSessionResponse,

    TaxAccountantRetrieveRegSessionRequest,
    TaxAccountantRetrieveRegSessionResponse,

    AcceptOfAppoinmtSoleSessionRequest,
    AcceptOfAppoinmtSoleSessionResponse,

    BusinessLicensePDFSessionRequest,
    BusinessLicensePDFSessionResponse,

    /* Kcomwel */
    LoginSessionSimpleKComwelRequest,
    LoginSessionSimpleKComwelResponse,

    EmploymentInfoSessionRequest,
    EmploymentInfoSessionResponse,

    ReportedCompensationSessionRequest,
    ReportedCompensationSessionResponse,

    ChargeableInsuranceInquirySessionRequest,
    ChargeableInsuranceInquirySessionResponse,

    SearchAdminnoRequest,
    SearchAdminnoResponse,

    /* Captcha */
    CaptchaRequest,
    CaptchaResponse,
    CaptchaResponseData,
}
export default DataAPIRequest
