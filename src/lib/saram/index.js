import {RegNoTypes, validateRegistrationNumber} from "./registrationNo";
import {validateKoreanName} from "./validateKoreanName";
import {getGender} from "./getGender";

/**
 * 사람과 관련된 도구모음
 */
export const saram = {
    isRegistrationNo,           // 주민/외국인 등록번호 검사
    isJuminRegistrationNo,      // 주민등록번호 검사
    isForeignRegistrationNo,    // 외국인 등록번호 검사
    getGender,                  // '생년', '성별숫자'로 성별 확인
    validateKoreanName,         // 한글이름 유효성검사
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

/**
 * 주민등록번호상 성별
 * @type {{MALE: string, FEMALE: string}}
 */
export const Gender = {
    /** 여성 */
    FEMALE: 'F',
    /** 남성 */
    MALE: 'M'
}
