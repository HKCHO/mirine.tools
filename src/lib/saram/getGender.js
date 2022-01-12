import {Gender} from "./index";
import StringUtils from "../utils/string-utils";

/**
 * 주민/외국인 등록번호상 '생년'과 주민등록번호 뒷자리 첫번째 수로 성별을 확인합니다.
 * - 확인할 수 없는 조합의 경우 `null`을 반환합니다
 *
 * <i>[올바른 사용]</i>
 * <pre>
 *     saram.getGender(1988, 1)
 *     saram.getGender('1988', '1')
 * </pre>
 *
 * <i>[잘못된 사용]</i>
 * <pre>
 *     saram.getGender(88, 1)
 *     saram.getGender('88', '1')
 *     saram.getGender('88', '312')
 * </pre>
 *
 * @param {string | number} birthYear 생년
 * @param {string | number} regno0 성별 숫자
 * @return {string|null} 남성: 'M', 여성: 'F', 알 수 없음: null
 *
 * @author hkcho
 */
export function getGender(birthYear, regno0) {
    // 올바르지 않은 생년 - 숫자형태의 문자열이 아닐경우
    if (!StringUtils.isNumeric(birthYear + '')) {
        console.warn(`'생년'이 올바르지 않습니다. birthYear=${birthYear}`)
        return null;
    }

    // 올바르지 않은 생년 - 4자리 수가 아닐경우
    if ((birthYear + '').length !== 4) {
        console.warn(`4자리 '생년'을 입력해주세요. birthYear=${birthYear}`)
        return null;
    }

    // 생년 - 4자리수
    let bYear = birthYear >> 0;


    // 올바르지 않은 성별 번호
    if (typeof regno0 === 'undefined' || regno0 === null || (regno0 + '').trim().length === 0) {
        console.warn(`'성별 숫자'가 올바르지 않습니다. regno0=${regno0}`)
        return null;
    }

    // 주민등록번호 성별
    const r0 = regno0 >> 0;

    // 주민등록번호 첫번 째 자리가 0 ~ 9 사이의 숫자가 아닐 경우
    if (r0 < 0 || r0 > 9) {
        console.warn(`'성별 숫자'가 올바르지 않습니다. regno0=${regno0}`)
        return null;
    }

    // 1900년 이전 출생자 ( ~ 1899년)
    if (bYear < 1900) {
        if (r0 === 9) return Gender.MALE;         // 한국남성
        else if (r0 === 0) return Gender.FEMALE;  // 한국여성
        else return notMatchedData(birthYear, regno0)
    }
    // 1900년대 출생자 (1900년 ~ 1999년)
    else if (bYear >= 1900 && bYear < 2000) {
        if (r0 === 1) return Gender.MALE;          // 한국남성
        else if (r0 === 2) return Gender.FEMALE;   // 한국여성
        else if (r0 === 5) return Gender.MALE;     // 외국남성
        else if (r0 === 6) return Gender.FEMALE;   // 외국여성
        else return notMatchedData(birthYear, regno0)
    }
    // 2000년대 출생자 (2000년 ~ ). 2100년에 업데이트가 필요합니다.
    else if (bYear >= 2000) {
        if (r0 === 3) return Gender.MALE;          // 한국남성
        else if (r0 === 4) return Gender.FEMALE;   // 한국여성
        else if (r0 === 7) return Gender.MALE;     // 외국남성
        else if (r0 === 8) return Gender.FEMALE;   // 외국여성
        else return notMatchedData(birthYear, regno0)
    } else {
        return notMatchedData(birthYear, regno0)
    }
}

/**
 * 확인할 수 없는 '생년', '성별숫자' 조합 알림
 *
 * @private
 * @param birthYear
 * @param regno0
 * @return {null}
 */
function notMatchedData(birthYear, regno0) {
    console.warn(`확인 불가능한 '생년'과 '성별 숫자'입니다. birthYear=${birthYear}, regno0=${regno0}`)
    return null;
}
