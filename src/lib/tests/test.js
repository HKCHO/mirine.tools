import mirine from '../index';
import saram from '../saram';
import { REGEX_COMPLETE_KOREAN } from '../utils/string-utils';
import { validateKoreanName } from '../saram/validateKoreanName';
import numberToGisusa from '../hangeul/susa/numberToGisusa';
import { GISUSA_TYPES } from '../hangeul/susa/constants';

test('사람 도구 기능검사', () => {
  /*
    const testRn = "990101-5020063";
    saram.isRegistrationNo(testRn)
    saram.isJuminRegistrationNo(testRn)
    saram.isForeignRegistrationNo(testRn)
    saram.validateKoreanName("조현권")

    const _saram = mirine.saram;
    _saram.isRegistrationNo(testRn);
 */
  /*
    // '생년'과 '성별숫자(주민등록번호 뒷자리 첫번째 수)'로 성별얻기
    console.log("성별 : ", saram.getGender("2001", "4"));
*/
  /*
  // 한글이름 유효성검사
  const name = "조현권";
  const validKoreanName = validateKoreanName(name)
  console.log(`[${name}] 올바른 한글이름? `, validKoreanName);
*/
});

test('한글 도구 기능검사', () => {
  /*
  const testNumber1 = '125.0335'; // 기수사 테스트
  const testNumber2 = 1e40; // 기수사 overflow 테스트
  const testNumber3 = '-1e36'; // 변환가능 최대
  const converted = numberToGisusa(testNumber1);
  const converted2 = numberToGisusa(testNumber1, GISUSA_TYPES.BANK, true);
  const converted3 = numberToGisusa(testNumber1, GISUSA_TYPES.NORMAL, true);
  const converted4 = numberToGisusa(testNumber1, true);

  console.log('converted: ', converted);
  console.log('converted2: ', converted2);
  console.log('converted3: ', converted3);
  console.log('converted4: ', converted4);
*/
  // console.log('@1: ', mirine.hangeul.susa.numberToGisusa(testNumber1));
  // const { susa } = mirine.hangeul;
  // console.log('@2: ', susa.numberToGisusa(testNumber1));
});

test('사업자 도구 기능검사', () => {
  /*
    // 사업자 등록번호 검사
    const validCompanyRegistrationNo = mirine.company.isCompanyRegistrationNo("138-08-95512")
    console.log(`validCompanyRegistrationNo: ${validCompanyRegistrationNo}`);
*/
  /*
    // 법인 등록번호 검사
    const validCorporateRegistrationNo = mirine.company.isCorporateRegistrationNo("2811110093514");
    console.log(`법인번호 유효성: ${validCorporateRegistrationNo}`);
*/
  /*
    // 법인번호에서 법인종류 가져오기
    const corpType = mirine.company.getCorporationType("2811110093514");
    console.log("법인종류 : ", corpType)
*/
  /*
    // 법인정보 확인
    const corporate = new mirine.company.Corporation({
        registrationNo: "2811110093514"
    });
    console.log("법인번호 유효성 : ", corporate.isValidCorpRegistrationNo());
    console.log("법인종류: ", corporate.getType());
    console.log("법률근거: ", corporate.getLegalBasis());
*/
});

test('기타 도구 기능검사', () => {
  /*
  // 이메일 유효성검사
  const { validateEmail } = mirine.misc;
  console.log('이메일 유효성', validateEmail('eddie88cho@gmail.com'));
 */
  /*
  // URL 유효성검사
  const { validateURL } = mirine.misc;
  console.log('URL 주소 유효성 검사 1', validateURL('https://github.com/hkcho'));
  console.log('URL 주소 유효성 검사 2', validateURL('svn://private.eddie88cho.com'));
  console.log('URL 주소 유효성 검사 3', validateURL('mongodb://localhost:27017/db'));
   */
});
