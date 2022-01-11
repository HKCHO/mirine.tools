import { RegNoTypes, validateRegistrationNumber } from "./registration-no";

/**
 * 사람과 관련된 도구모음
 *
 * @hideconstructor
 */
class Saram {
  constructor() {
    throw "[Mirine.Saram] 인스턴스화 할 수 없습니다.";
  }

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

  /**
   * 한글 이름을 유효성검사 합니다.
   * <pre>
   *     - "조현권", "남궁현권", "황금독수리", "고고한허수아비"  => true
   *     - "조 현권", "", "조현권ㅏ", "조현ㄱ"              => false
   * </pre>
   *
   * @method
   * @public
   * @param name {string} 한글이름
   * @returns {boolean} 한글이름 유효성
   */
  static validateKoreanName(name) {
    return false;
  }
}

export default Saram;
