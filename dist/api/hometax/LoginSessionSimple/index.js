"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LoginSessionSimple = void 0;
const endpoints_1 = require("../../endpoints");
async function LoginSessionSimple(api, data) {
    return api.post(endpoints_1.endpoints.LoginSessionSimple, data);
}
exports.LoginSessionSimple = LoginSessionSimple;
