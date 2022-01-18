import isEndWithBatchim from '../isEndWithBatchim';

/**
 * <h3>단어 뒤에 올 '을/를' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('김정은'); // returns '을' - 김정은을
 * @example
 * hangeul.isEndWithBatchim('이설주'); // returns '를' - 이설주를
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '을' - 21을
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '를' - 22를
 *
 * @param {string|number} word 단어
 * @return {string} '을' 또는 '를'
 */
export default function eulreul(word) {
  return isEndWithBatchim(word) ? '을' : '를';
}
