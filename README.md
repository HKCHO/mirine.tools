# [mirine.tools](https://github.com/HKCHO/mirine.tools)

 한국인이 자주 사용하는 기능을 모아놓은 javascript 라이브러리입니다.

## Features

- ### 한국인 관련 도구
  - 주민/외국인 등록번호 유효성 검사
    - 주민/외국인 등록번호 통합 유효성검사
      - [`saram.isRegistrationNo(registrationNo)`](https://github.com/HKCHO/mirine.tools/blob/706cc6be323fcb98a5a1bc1bb3b4d9b8dd59df38/src/lib/saram/index.js#L16-L25)
    - 주민 등록번호 유효성검사
      - [`saram.isJuminRegistrationNo(registrationNo)`](https://github.com/HKCHO/mirine.tools/blob/706cc6be323fcb98a5a1bc1bb3b4d9b8dd59df38/src/lib/saram/index.js#L27-L36)
    - 외국인 등록번호 유효성검사
      - [`saram.isForeignRegistrationNo(registrationNo)`](https://github.com/HKCHO/mirine.tools/blob/706cc6be323fcb98a5a1bc1bb3b4d9b8dd59df38/src/lib/saram/index.js#L38-L47)
  - 한글이름 유효성검사
    - [`saram.validateKoreanName(name)`](./src/lib/saram/validateKoreanName.js)
  - '태어난 연도'와 '주민등록번호 뒷자리 첫째 수'로 성별 확인
    - [`saram.getGender(birthYear, regno0)`](./src/lib/saram/getGender.js)


- ### 기업관련 도구  
  - '사업자 등록번호' 유효성 검사
    - [`company.isCompanyRegistrationNo(registrationNo)`](./src/lib/company/isCompanyRegistrationNo.js)
  - '법인 번호' 유효성 검사
    - [`company.isCorporateRegistrationNo(registrationNo)`](./src/lib/company/isCorporateRegistrationNo.js)
  - '법인 번호'로 '법인 종류' 확인
    - [`company.getCorpType(registrationNo)`](./src/lib/company/getCorpType.js)
  - '법인 번호'로 '법률 근거' 확인
    - [`company.getCorpLegalBasis(registrationNo)`](./src/lib/company/getCorpLegalBasis.js)

- ### 한글 관련 도구
  - 조사
    - 단어뒤에 올 '을/를' 중 올바른 조사를 반환
      - [`hangeul.josa.eulreul(word)`](./src/lib/hangeul/josa/eulreul.js) 
    - 단어뒤에 올 '은/는' 중 올바른 조사를 반환
      - [`hangeul.josa.eunneun(word)`](./src/lib/hangeul/josa/eunneun.js)
    - 단어뒤에 올 '이/가' 중 올바른 조사를 반환
      - [`hangeul.josa.iga(word)`](./src/lib/hangeul/josa/iga.js)
    - 단어뒤에 올 '와/과' 중 올바른 조사를 반환
      - [`hangeul.josa.wagwa(word)`](./src/lib/hangeul/josa/wagwa.js)
    - 단어뒤에 올 '로/으로' 중 올바른 조사를 반환
      - [`hangeul.josa.eulo(word)`](./src/lib/hangeul/josa/eulo.js)
  - 수사
    - 숫자를 기수사로 변경 
      - [`hangeul.susa.numberToGisusa(number, [type], [spacing])`](./src/lib/hangeul/susa/numberToGisusa.js)
  - 단어의 받침유무 확인
      - [`hangeul.isEndWithBatchim(word)`](./src/lib/hangeul/isEndWithBatchim.js)

- ### 기타 도구
  - 이메일 주소 유효성 검사
    - [`misc.validateEmail(email)`](./src/lib/misc/validateEmail.js)
  - URL 주소 유효성 검사
    - [`misc.validateURL(url)`](./src/lib/misc/validateURL.js)
  - IPv4 주소 유효성 검사
    - [`misc.validateIPv4(ipv4)`](./src/lib/misc/validateIPv4.js)
<!--- 
## Donate
- 여러분들의 도움에 큰 감사를 드리는 바입니다.
  - [페이팔로 후원하기](https://paypal.me/eddie88cho)
  - [패트론으로 후원하기](https://www.patreon.com/eddie88cho)
-->
