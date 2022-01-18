export { HANGEUL_BASE, HANGEUL_END };
/** 가 */
const HANGEUL_BASE = 0xac00;
const HANGEUL_END = 0xd7af;
const JONG_LIST = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];
export const JONG = {
  // 'ㄹ'의 종성 인덱스
  RIEUL_IDX: JONG_LIST.indexOf('ㄹ'),
};
