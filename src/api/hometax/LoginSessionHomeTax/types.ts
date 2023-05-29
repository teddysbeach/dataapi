//https://dataapi.co.kr/dLab/mdh_api.do#
// 홈택스_로그인세션 헤더 출력

export interface LoginSessionHomeTaxResponse {
    errCode: string;
    errMsg: string;
    result: string;
    data: LoginSessionHomeTaxResponseData;
}

export interface LoginSessionHomeTaxResponseData {
    RESULT: string;
    ERRMSG: string;
    ERRDOC: string;
    ECODE: string;
    ETRACK: string;
    LOGINHEADERS: string;
    INPUTUSERID: string;
}

export interface LoginSessionHomeTaxRequest {
    TXAGNTMGMTNO?: string;
    TXAGNTMGMTPW?: string;
    USERGUBUN: string;          // 사용자 구분 (1: 개인, 2: 사업자, 3: 법인, 4: 세무사)
    P_CERTNAME: string;         // 인증서 이름
    P_CERTPWD: string;          // 인증서 비밀번호
    P_SIGNCERT_DER: string;     // 인증서 DER
    P_SIGNPRI_KEY: string;      // 인증서 개인키
}