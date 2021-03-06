import isEndWithBatchim from '../isEndWithBatchim';
import getJongseongIndex from '../getJongseongIndex';
import { JONG } from './constants';

// 받침에 따라 달라지는 조사 처리
export default function getJosa(word, josa) {
  const hasJong = isEndWithBatchim(word);
  if (josa === '을' || josa === '를') return hasJong ? '을' : '를';
  if (josa === '은' || josa === '는') return hasJong ? '은' : '는';
  if (josa === '이' || josa === '가') return hasJong ? '이' : '가';
  if (josa === '와' || josa === '과') return hasJong ? '과' : '와';
  if (josa === '로' || josa === '으로') {
    if (hasJong) {
      return getJongseongIndex(word) === JONG.RIEUL_IDX ? '로' : '으로';
    }
    return '로';
  }
  return '';
}
