import getJosa from './getJosa';

/**
 * <h3>단어 뒤에 올 '와/과' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '과' - 조현권과
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns '와' - 유혜지와
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '과' - 21과
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '와' - 22와
 *
 * @param {string|number} word 단어
 * @return {string} '와' 또는 '과'
 */
export default function eulreul(word) {
  return getJosa(word, '와');
}
