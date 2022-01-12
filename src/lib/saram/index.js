import {RegNoTypes, validateRegistrationNumber} from "./registrationNo";
import {validateKoreanName} from "./validateKoreanName";

/**
 * 사람과 관련된 도구모음
 */
export const saram = {
    isRegistrationNo,
    isJuminRegistrationNo,
    isForeignRegistrationNo,
    validateKoreanName,
};

/**
 * 주민등록번호 또는 외국인등록번호인지 확인.
 *
 * @param {string} registrationNo 주민 또는 외국인 등록번호
 * @returns {boolean} 주민/외국인 번호의 유효성
 */
function isRegistrationNo(registrationNo) {
    return validateRegistrationNumber(registrationNo);
}

/**
 * 주민등록번호 여부 확인.
 *
 * @param {string} registrationNo 주민등록번호
 * @returns {boolean} 주민등록번호 유효성
 */
function isJuminRegistrationNo(registrationNo) {
    return validateRegistrationNumber(registrationNo, RegNoTypes.RRN);
}

/**
 * 외국인등록번호 여부 확인.
 *
 * @param {string} registrationNo 외국인등록번호
 * @returns {boolean} 외국인등록번호 유효성
 */
function isForeignRegistrationNo(registrationNo) {
    return validateRegistrationNumber(registrationNo, RegNoTypes.FRN);
}
