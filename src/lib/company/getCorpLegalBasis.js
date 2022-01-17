import Corporation from './Corporation';

/**
 * 법인번호에서 법률근거 가져오기
 *
 * @param registrationNo 법인번호
 *
 * @author hkcho
 */
export default function getCorpLegalBasis(registrationNo) {
  const corporation = new Corporation({
    registrationNo,
  });

  // 법인등록번호 유효성 검사
  if (!corporation.isValidCorpRegistrationNo()) return null;

  return corporation.getLegalBasis();
}
