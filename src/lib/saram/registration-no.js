import StringUtils from "../utils/string-utils";

export {
    validateRegistrationNumber
}

/**
 * 등록번호 타입
 *
 * @private
 */
export const RegNoTypes = {
    RRN: 'rrn',     // 주민등록번호
    FRN: 'frn',     // 외국인등록번호
}

/**
 * 주민등록번호 또는 외국인등록번호인지 확인.
 *
 * @method
 * @private
 * @param {string} registrationNo 주민 또는 외국인 등록번호
 * @param {string} type 검사할 등록번호 타입
 * @returns {boolean} 주민/외국인 번호의 유효성
 */
function validateRegistrationNumber(registrationNo, type) {
    const rn = (registrationNo + '').trim().split("-").join('');    // 하이픈(-)이 있을경우 제거

    // 등록번호 형태의 문자열이 아님
    if (!StringUtils.isNumeric(rn) || rn.length !== 13) {
        return false;
    }

    let checkSum = 0;   // 검증값 합계
    for(let i=0; i<12; i++) checkSum += ((rn.substr(i,1)>>0)*((i%8)+2));

    // 주민등록번호 매치
    const rrnMatch = (11-(checkSum%11))%10 == rn.substr(12,1);
    // 외국인등록번호 매치
    const frnMatch = (13-(checkSum%11))%10 == rn.substr(12,1);

    if( type === 'rrn' ) return rrnMatch;
    else if( type === 'frn' ) return frnMatch;
    else return rrnMatch || frnMatch;
}
