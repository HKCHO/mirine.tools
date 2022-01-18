import getJosa from './getJosa';

/**
 * <h3>단어 뒤에 올 '은/는' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '은' - 조현권은
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns '는' - 유혜지는
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '은' - 21은
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '는' - 22는
 *
 * @param {string|number} word 단어
 * @return {string} '은' 또는 '는'
 */
export default function eulreul(word) {
  return getJosa(word, '은');
}
