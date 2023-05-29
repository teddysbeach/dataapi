"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DataAPIRequest = void 0;
const axios_1 = __importDefault(require("axios"));
const crypt_1 = require("../utils/crypt");
class DataAPIRequest {
    constructor(isTest, token, key, iv) {
        const baseURL = isTest ? 'https://datahub-dev.scraping.co.kr' : 'https://api.mydatahub.co.kr';
        this.dataAPICrypto = new crypt_1.DataAPICrypto(key, iv);
        this.axiosInstance = axios_1.default.create({
            baseURL,
        });
        this.token = token;
    }
    sendRequest(endpoint, method, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            const headers = Object.assign({ Authorization: `Token ${this.token}` }, config === null || config === void 0 ? void 0 : config.headers);
            const response = yield this.axiosInstance.request(Object.assign({ url: endpoint, method: method, headers,
                data }, config));
            if (response.status >= 400) {
                throw new Error(`Request failed with status code ${response.status}`);
            }
            return response.data;
        });
    }
    get(endpoint, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendRequest(endpoint, 'GET', undefined, config);
        });
    }
    post(endpoint, data, config) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.sendRequest(endpoint, 'POST', data, config);
        });
    }
    get crypto() {
        return this.dataAPICrypto;
    }
}
exports.DataAPIRequest = DataAPIRequest;
