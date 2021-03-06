import StringUtils from '../utils/string-utils';

/**
 * 법인 등록번호 유효성 검사
 *
 * 참고: [법인및재외국민의부동산등기용등록번호부여에관한규칙]{@link https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=57867#0000}
 *
 * @param {string} registrationNo 법인등록번호
 * @returns {boolean} 법인등록번호 유효성
 *
 * @author hkcho
 */
export default function isCorporateRegistrationNo(registrationNo) {
  const rn = `${registrationNo}`.trim().split('-').join(''); // 하이픈(-)이 있을경우 제거

  // 법인등록번호 형태의 문자열이 아님
  if (!StringUtils.isNumeric(rn) || rn.length !== 13) {
    return false;
  }
  let checkSum = 0; // 검증값 합계
  for (let i = 0; i < 12; i++)
    checkSum += (rn.substr(i, 1) >> 0) * ((i % 2) + 1);

  return `${(10 - (checkSum % 10)) % 10}` === rn.substr(12, 1);
}
