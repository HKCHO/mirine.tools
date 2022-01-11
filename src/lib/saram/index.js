import {RegNoTypes, validateRegistrationNumber} from "./registration-no";

/**
 * 사람과 관련된 도구모음
 *
 */
class Saram {
    /**
     * 주민등록번호 또는 외국인등록번호인지 확인.
     *
     * @method
     * @public
     * @param {string} registrationNo 주민 또는 외국인 등록번호
     * @returns {boolean} 주민/외국인 번호의 유효성
     */
     static isRegistrationNo(registrationNo) {
        return validateRegistrationNumber(registrationNo);
    }

    /**
     * 주민등록번호 여부 확인.
     *
     * @method
     * @public
     * @param {string} registrationNo 주민등록번호
     * @returns {boolean} 주민등록번호 유효성
     */
    static isJuminRegistrationNo(registrationNo) {
        return validateRegistrationNumber(registrationNo, RegNoTypes.RRN);
    }

    /**
     * 외국인등록번호 여부 확인.
     *
     * @method
     * @public
     * @param {string} registrationNo 외국인등록번호
     * @returns {boolean} 외국인등록번호 유효성
     */
    static isForeignRegistrationNo(registrationNo) {
        return validateRegistrationNumber(registrationNo, RegNoTypes.FRN);
    }
}

export default Saram;
