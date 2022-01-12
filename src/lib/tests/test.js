import mirine from "../../index";
import {saram} from "../saram";


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
});

test('한글 도구 기능검사', () => {

})

test('사업자 도구 기능검사', () => {
/*
    // 사업자 등록번호 검사
    const validCompanyRegistrationNo = mirine.company.isCompanyRegistrationNo("138-08-95512")
    console.log(`validCompanyRegistrationNo: ${validCompanyRegistrationNo}`);
*/
/*
    // 법인 등록번호 검사 - 1
    const validCorporateRegistrationNo = mirine.company.isCorporateRegistrationNo("2811110093514");
    console.log(`법인번호 유효성: ${validCorporateRegistrationNo}`);
*/
/*
    // 법인번호에서 법인종류 확인 - 1
    const corporateDat = mirine.company.getCorporationType("2811110093514");
    console.log("법인종류 : ", corporateDat)
*/
/*
    // 법인번호에서 법인종류 확인 - 2
    const corporate = new mirine.company.Corporation({
        registrationNo: "2811110093514"
    });
    console.log("법인번호 유효성 : ", corporate.isValidRegistrationNo());
    console.log("법인종류: ", corporate.getType());
*/
})
