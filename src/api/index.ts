import { endpoints } from "./endpoints";
import { DataAPICrypto  } from "../utils/crypt";
import { DataAPIRequest } from "./request";

import { Captcha } from "./global/Captcha";
import { CaptchaRequest, CaptchaResponse, CaptchaResponseData } from "./global/Captcha/types";

import { LoginSessionSimpleHomeTax } from "./hometax/LoginSessionSimpleHomeTax";
import { LoginSessionSimpleHomeTaxRequest, LoginSessionSimpleHomeTaxResponse } from "./hometax/LoginSessionSimpleHomeTax/types";

import { LoginSessionSimpleKComwel  } from "./kcomwel/LoginSessionSimpleKComwel";
import { LoginSessionSimpleKComwelRequest, LoginSessionSimpleKComwelResponse } from "./kcomwel/LoginSessionSimpleKComwel/types";

import { TaxReturnResultTotalSession } from "./hometax/TaxReturnResultTotalSession";
import { TaxReturnResultTotalSessionRequest, TaxReturnResultTotalSessionResponse } from "./hometax/TaxReturnResultTotalSession/types";

import { ReportedCompensationSession } from "./kcomwel/ReportedCompensationSession";
import { ReportedCompensationSessionRequest, ReportedCompensationSessionResponse } from "./kcomwel/ReportedCompensationSession/types";

import { EmploymentInfoSession } from "./kcomwel/EmploymentInfoSession";
import { EmploymentInfoSessionRequest, EmploymentInfoSessionResponse } from "./kcomwel/EmploymentInfoSession/types";

import { SearchAdminno } from "./kcomwel/SearchAdminno";
import { SearchAdminnoRequest, SearchAdminnoResponse } from "./kcomwel/SearchAdminno/types";

export { 
    endpoints, 
    DataAPICrypto,

    /* Hometax */
    LoginSessionSimpleHomeTax,
    TaxReturnResultTotalSession,
    
    /* Kcomwel */
    LoginSessionSimpleKComwel,
    EmploymentInfoSession,
    ReportedCompensationSession,
    SearchAdminno,

    /* Captcha */
    Captcha
}

export type {
    /* Hometax */
    LoginSessionSimpleHomeTaxRequest,
    LoginSessionSimpleHomeTaxResponse,
    TaxReturnResultTotalSessionRequest,
    TaxReturnResultTotalSessionResponse,

    /* Kcomwel */
    LoginSessionSimpleKComwelRequest,
    LoginSessionSimpleKComwelResponse,
    EmploymentInfoSessionRequest,
    EmploymentInfoSessionResponse,
    ReportedCompensationSessionRequest,
    ReportedCompensationSessionResponse,
    SearchAdminnoRequest,
    SearchAdminnoResponse,

    /* Captcha */
    CaptchaRequest,
    CaptchaResponse,
    CaptchaResponseData,
}
export default DataAPIRequest
