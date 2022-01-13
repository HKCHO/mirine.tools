import StringUtils from '../utils/string-utils';

/**
 * 사업자 등록번호 유효성 검사
 *
 * @param {string} registrationNo 사업자등록번호
 * @returns {boolean} 사업자등록번호 유효성
 */
export default function isCompanyRegistrationNo(registrationNo) {
  const rn = (`${registrationNo}`).trim().split('-').join(''); // 하이픈(-)이 있을경우 제거

  // 사업자 등록번호 형태의 문자열이 아님
  if (!StringUtils.isNumeric(rn) || rn.length !== 10) {
    return false;
  }
  const checkSet = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  let checkSum = 0;

  checkSet.forEach((d, i) => {
    checkSum += d * rn[i];
  });

  checkSum += parseInt((checkSet[8] * rn[8]) / 10, 10);
  return Math.floor(rn[9]) === (10 - (checkSum % 10)) % 10;
}
