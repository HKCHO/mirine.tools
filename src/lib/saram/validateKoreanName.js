import { REGEX_COMPLETE_KOREAN } from '../utils/string-utils';

export default {
  validateKoreanName,
};

/**
 * 한글 이름을 유효성검사 합니다.
 *
 * <pre>
 *     - "조현권", "남궁현권", "황금독수리", "고고한허수아비"  => true
 *     - "조 현권", "", "조현권ㅏ", "조현ㄱ", "조"        => false
 * </pre>
 *
 * @method
 * @see REGEX_COMPLETE_KOREAN
 * @param name {string} 한글이름
 * @returns {boolean} 한글이름 유효성
 *
 * @author hkcho
 */
export function validateKoreanName(name) {
  // 입력값이 '문자열이 아니'거나 '공백문자'거나 '한 글자'일 경우
  if (typeof name !== 'string' || name.trim().length <= 1) return false;

  return name.match(REGEX_COMPLETE_KOREAN) !== null;
}
