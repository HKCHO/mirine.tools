import { HANGEUL_BASE } from './josa/constants';

/**
 * 낱말의 종성 인덱스 확인
 * @param word 단어
 * @return {number} 종성 인덱스
 */
export default function getJongseongIndex(word) {
  // 마지막 단어
  let lastChar = `${word}`.charAt(word.length - 1);
  return (lastChar.charCodeAt(0) - HANGEUL_BASE) % 28;
}
