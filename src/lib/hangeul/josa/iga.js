import getJosa from './getJosa';

/**
 * <h3>단어 뒤에 올 '이/가' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '이' - 조현권이
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns '가' - 유혜지가
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '이' - 21이
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '가' - 22가
 *
 * @param {string|number} word 단어
 * @return {string} '이' 또는 '가'
 */
export default function eulreul(word) {
  return getJosa(word, '이');
}
