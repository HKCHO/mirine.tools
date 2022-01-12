import Corporation from "./Corporation";
import {isCorporateRegistrationNo} from "./isCorporateRegistrationNo";

/**
 * 법인번호에서 법인정보 추출
 *
 * @param registrationNo 법인번호
 */
export function getCorporateClassInfo(registrationNo) {
    // 법인등록번호 유효성 검사
    if( !isCorporateRegistrationNo(registrationNo) ) return false;

    // let corporate = new Corporate();
}
