export const endpoints = {
    // Kcomwel
    LoginSessionSimpleKComwel:      '/scrap/corpTax/kcomwel/LoginSessionSimple',                    // 고용정보 로그인세션 추출(간편인증)
    EmploymentInfoSession:          '/scrap/corpTax/kcomwel/EmploymentInfoSession',                 // 고용정보 근로자고용정보현황(로그인세션)
    ReportedCompensationSession:    '/scrap/corpTax/kcomwel/ReportedCompensationSession',           // 고용정보 보수총액신고내역(로그인세션)
    SearchAdminno:                  '/scrap/corpTax/kcomwel/SearchAdminno',                         // 고용정보 사업자등록번호조회
    SearchAdminnoBranch:            '/scrap/corpTax/kcomwel/SearchAdminnoBranch',                   // 고용정보 사업장관리번호 지사 목록 조회
    
    // HomeTax
    LoginSessionSimpleHomeTax:      '/scrap/common/hometax/LoginSessionSimple',                     // 홈택스 로그인세션 추출(간편인증)
    TaxReturnResultTotalSession:    '/scrap/common/hometax/TaxReturnResultTotalSession',            // 홈택스 세금신고결과 전체조회(로그인세션)
    Captcha:                        '/scrap/captcha',                                               // 캡차콜백
}