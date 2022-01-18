import { HANGEUL_BASE } from './josa/constants';
import numberToGisusa from './susa/numberToGisusa';

/**
 * <h3>단어의 마지막 글자가 받침을 가지고 있는지 확인합니다</h3>
 *  - 한글단어 지원
 *  - 숫자 지원
 * <br/>
 * @example
 * hangeul.isEndWithBatchim('김정은'); // returns true
 * @example
 * hangeul.isEndWithBatchim('이설주'); // returns false
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '이십일'
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '이십이'
 *
 * @param {string|number} word 단어
 * @return {boolean} 받침 유무 여부
 */
export default function isEndWithBatchim(word) {
  if (typeof word === 'undefined' || word === null) return false;

  // 마지막 단어
  let lastChar = `${word}`.charAt(word.length - 1);

  // 숫자일 경우 기수사로 변경
  if (/\d/.test(lastChar)) {
    lastChar = numberToGisusa(lastChar);
  }

  // TODO 알파벳으로 마무리 될 때 종성을 처리할 수 있는 규칙이 있을까?

  // 0 = 받침 없음
  return (lastChar.charCodeAt(0) - HANGEUL_BASE) % 28 !== 0;
}
