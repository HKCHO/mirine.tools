import Corporation from './Corporation';

/**
 * 법인번호에서 법인종류 가져오기
 *
 * @param registrationNo 법인번호
 * @author hkcho
 */
export default function getCorpType(registrationNo) {
  const corporation = new Corporation({
    registrationNo,
  });

  // 법인등록번호 유효성 검사
  if (!corporation.isValidCorpRegistrationNo()) return null;

  return corporation.getType();
}
