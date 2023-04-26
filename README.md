# dataapi

### 경정청구용 데이터 스크래핑 모듈 기반
사용 토큰은 [데이터허브](https://dataapi.co.kr/)에서 회원가입후 받을 수 있음.
자동으로 필드 암호화를 거치기 때문에 암호화 할 필요 없음.
* 모듈 추가는 직접 포크해서 하면됨
* 모듈 추가 및 홈택스관련 스크래핑, 웹사이트 제작 의뢰 [플롯팩토리](http://floatfactory.kr)

### 사용방법
##### 초기화
```
    const dataApi = new DataAPIRequest([테스트모드 여부 (boolean)],[토큰(string)],[암호화key(string)],[암호화iv(string)])
```
##### 홈택스 로그인하여 세션받기
```
    const res = await LoginSessionSimpleHomeTax(dataApi, {
        TXAGNTMGMTNO: null,
        TXAGNTMGMTPW: null,
        USERGUBUN: '1',
        LOGINOPTION: '0',
        TELECOMGUBUN: null,
        JUMINNUM: info.jumin,
        USERNAME: info.name,
        HPNUMBER: info.phone,
    })
```
