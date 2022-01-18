import getJosa from './getJosa';

/**
 * <h3>단어 뒤에 올 '을/를' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '을' - 조현권을
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns '를' - 유혜지를
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '을' - 21을
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '를' - 22를
 *
 * @param {string|number} word 단어
 * @return {string} '을' 또는 '를'
 */
export default function eulreul(word) {
  return getJosa(word, '을');
}
