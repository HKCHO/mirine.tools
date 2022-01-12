/**
 * 문자관련 도구모음
 *
 * @ignore
 * @author hkcho
 */
class StringUtils {
    constructor() {throw "인스턴스화 할 수 없습니다.";}

    /**
     * 알파벳과 숫자로 이루어져 있는지 검사
     *
     * @param {string} str 검사할 문자열
     *
     * @author hkcho
     */
    static isAlphaNumeric(str) {
        if (/\s/g.test(str) || /[^a-zA-Zs0-9]/g.test(str)) {
            return false;
        } else {
            return /[\w\d]/g.test(str);
        }
    }

    /**
     * 숫자 형식의 문자열인지 검사
     *
     * @param {string | number} str 검사할 문자열
     *
     * @author hkcho
     */
    static isNumeric(str) {
        if (typeof str !== "string") return false;
        return !isNaN(str) && !isNaN(parseFloat(str));
    }
}

export default StringUtils;

// 완성형 한글 정규식
export const REGEX_COMPLETE_KOREAN = /^[가-힣]+$/;
