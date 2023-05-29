"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BRANCHES = exports.Captcha = exports.SearchAdminno = exports.ChargeableInsuranceInquirySession = exports.ReportedCompensationSession = exports.LoginSessionSimpleKComwel = exports.EmploymentInfoSession = exports.BusinessLicensePDFSession = exports.AcceptOfAppoinmtSoleSession = exports.TaxAccountantRetrieveRegSession = exports.TaxReturnResultTotalSession = exports.LoginSessionHomeTax = exports.LoginSessionSimpleHomeTax = exports.DataAPICrypto = exports.endpoints = void 0;
const endpoints_1 = require("./endpoints");
Object.defineProperty(exports, "endpoints", { enumerable: true, get: function () { return endpoints_1.endpoints; } });
const crypt_1 = require("../utils/crypt");
Object.defineProperty(exports, "DataAPICrypto", { enumerable: true, get: function () { return crypt_1.DataAPICrypto; } });
const request_1 = require("./request");
const Captcha_1 = require("./global/Captcha");
Object.defineProperty(exports, "Captcha", { enumerable: true, get: function () { return Captcha_1.Captcha; } });
const LoginSessionSimpleHomeTax_1 = require("./hometax/LoginSessionSimpleHomeTax");
Object.defineProperty(exports, "LoginSessionSimpleHomeTax", { enumerable: true, get: function () { return LoginSessionSimpleHomeTax_1.LoginSessionSimpleHomeTax; } });
const LoginSessionHomeTax_1 = require("./hometax/LoginSessionHomeTax");
Object.defineProperty(exports, "LoginSessionHomeTax", { enumerable: true, get: function () { return LoginSessionHomeTax_1.LoginSessionHomeTax; } });
const LoginSessionSimpleKComwel_1 = require("./kcomwel/LoginSessionSimpleKComwel");
Object.defineProperty(exports, "LoginSessionSimpleKComwel", { enumerable: true, get: function () { return LoginSessionSimpleKComwel_1.LoginSessionSimpleKComwel; } });
const TaxReturnResultTotalSession_1 = require("./hometax/TaxReturnResultTotalSession");
Object.defineProperty(exports, "TaxReturnResultTotalSession", { enumerable: true, get: function () { return TaxReturnResultTotalSession_1.TaxReturnResultTotalSession; } });
const TaxAccountantRetrieveRegSession_1 = require("./hometax/TaxAccountantRetrieveRegSession");
Object.defineProperty(exports, "TaxAccountantRetrieveRegSession", { enumerable: true, get: function () { return TaxAccountantRetrieveRegSession_1.TaxAccountantRetrieveRegSession; } });
const AcceptOfAppoinmtSoleSession_1 = require("./hometax/AcceptOfAppoinmtSoleSession");
Object.defineProperty(exports, "AcceptOfAppoinmtSoleSession", { enumerable: true, get: function () { return AcceptOfAppoinmtSoleSession_1.AcceptOfAppoinmtSoleSession; } });
const BusinessLicensePDFSession_1 = require("./hometax/BusinessLicensePDFSession");
Object.defineProperty(exports, "BusinessLicensePDFSession", { enumerable: true, get: function () { return BusinessLicensePDFSession_1.BusinessLicensePDFSession; } });
const ReportedCompensationSession_1 = require("./kcomwel/ReportedCompensationSession");
Object.defineProperty(exports, "ReportedCompensationSession", { enumerable: true, get: function () { return ReportedCompensationSession_1.ReportedCompensationSession; } });
const EmploymentInfoSession_1 = require("./kcomwel/EmploymentInfoSession");
Object.defineProperty(exports, "EmploymentInfoSession", { enumerable: true, get: function () { return EmploymentInfoSession_1.EmploymentInfoSession; } });
const ChargeableInsuranceInquirySession_1 = require("./kcomwel/ChargeableInsuranceInquirySession");
Object.defineProperty(exports, "ChargeableInsuranceInquirySession", { enumerable: true, get: function () { return ChargeableInsuranceInquirySession_1.ChargeableInsuranceInquirySession; } });
const SearchAdminno_1 = require("./kcomwel/SearchAdminno");
Object.defineProperty(exports, "SearchAdminno", { enumerable: true, get: function () { return SearchAdminno_1.SearchAdminno; } });
const branches_1 = __importDefault(require("../utils/branches"));
exports.BRANCHES = branches_1.default;
exports.default = request_1.DataAPIRequest;
