/**
 * 문자관련 도구모음
 *
 * @private
 */
class StringUtils {

    /**
     * 알파벳과 숫자로 이루어져 있는지 검사
     *
     * @param {string} str 검사할 문자열
     */
    static isAlphaNumeric(str) {
        if ((/\s/g).test(str) || (/[^a-zA-Zs0-9]/g).test(str)) {
            return false;
        } else {
            return (/[\w\d]/g).test(str);
        }
    }

    /**
     * 숫자 형식의 문자열인지 검사
     *
     * @param {string | number} str 검사할 문자열
     */
    static isNumeric(str) {
        if (typeof str !== "string") return false
        return !isNaN(str) && !isNaN(parseFloat(str))
    }
}

export default StringUtils;
