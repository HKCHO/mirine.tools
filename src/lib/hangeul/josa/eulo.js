import getJosa from './getJosa';

/**
 * <h3>단어 뒤에 올 '으/으로' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '으로' - 조현권으로
 * @example
 * hangeul.isEndWithBatchim('이메일'); // returns '로' - 이메일로
 *
 * @param {string|number} word 단어
 * @return {string} '로' 또는 '으로'
 */
export default function eulreul(word) {
  return getJosa(word, '로');
}
