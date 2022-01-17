import {
  GISUSA_DIGITS_1,
  GISUSA_DIGITS_10,
  GISUSA_DIGITS_100,
  GISUSA_TYPES,
} from './constants';

/**
 *  숫자를 한자어 셈낱씨(기수사)로 변환합니다.
 *
 *  참고1: [한국어 수사]{@link https://ko.wiktionary.org/wiki/%EB%B6%80%EB%A1%9D:%ED%95%9C%EA%B5%AD%EC%96%B4_%EC%88%98%EC%82%AC}
 *  참고2: [음수 한글표현]{@link https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=90574}
 *  참고3: [만단위 띄어쓰기]{@link https://kornorms.korean.go.kr/regltn/regltnView.do?regltn_code=0001&regltn_no=264#a264}
 *
 * <pre>
 *     minine.hangeul.susa.numberToGisusa(1)      => 일
 *     minine.hangeul.susa.numberToGisusa(2)      => 이
 *     minine.hangeul.susa.numberToGisusa(1024)   => 천삼백이십사
 *
 *     minine.hangeul.susa.numberToGisusa(123456) => 십이만삼천사백오십육
 *     minine.hangeul.susa.numberToGisusa(123456, true) => 십이만 삼천사백오십육
 *     minine.hangeul.susa.numberToGisusa(123456, GISUSA_TYPES.BANK)   => 일십이만삼천사백오십육
 *     minine.hangeul.susa.numberToGisusa(123456, GISUSA_TYPES.BANK, true)   => 일십이만 삼천사백오십육
 * </pre>
 *
 * @param {string | number} number  한글 기수사로 변환할 수 또는 numeric string
 * @param {number} type 기수사 형태
 * @param {boolean} spacing 만단위 띄어쓰기
 * @return {string} 기수사로 변환된 단어
 *
 * @author hkcho
 */
export default function numberToGisusa(
  number,
  type = GISUSA_TYPES.NORMAL,
  spacing = false
) {
  // 유효한 'number'?
  if (typeof number === 'string') number = number.replace(',', '');
  if (Number.isNaN(number)) {
    return number;
  }

  // Optional option.
  if (typeof type === 'boolean') {
    spacing = type;
    type = GISUSA_TYPES.NORMAL;
  }

  let num = parseFloat(number);
  if (num === 0) return GISUSA_DIGITS_1[0].label;

  // 음수여부 => 음수표현근거 (https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=90574)
  const IS_NEGATIVE = num < 0;
  if (IS_NEGATIVE) num *= -1;

  // 기수사 변환 가능한 최대 수
  const [biggest] = GISUSA_DIGITS_100[GISUSA_DIGITS_100.length - 1];
  const maxLen = Math.ceil(Math.log10(biggest + 1)) + 3; // 십x, 백x, 천x (3개)

  // 변환할 숫자의 자리수
  const numLen = Math.ceil(Math.log10(num + 1));

  // 기수사로 변환 가능한 범위를 넘어서버림
  if (maxLen < numLen) return number;

  const [numStr, decimalPlaces] = toFixedString(num).split('.');

  // 기수사로 변환된 결과 = 만단위로 쪼개서 역순한 후 한글로 변환
  const converted = numStr
    .split('')
    .reverse()
    .join('')
    .match(/.{1,4}/g)
    .map((bunch, idx) => {
      const kor = [];
      bunch.split('').forEach((char, at) => {
        const n = char >> 0;
        let s;
        if (n > 0) {
          s = GISUSA_DIGITS_1[n].label;
          if (at > 0) {
            if (n === 1 && type !== GISUSA_TYPES.BANK) {
              s = `${GISUSA_DIGITS_10[at][1]}`;
            } else {
              s += `${GISUSA_DIGITS_10[at][1]}`;
            }
          }
          kor.push(s);
        }
      });

      // 만단위
      const bunchSuffix = kor.length > 0 ? GISUSA_DIGITS_100[idx][1] : '';
      return `${kor.reverse().join('')}${bunchSuffix}`;
    });

  // 역순한 변환 기수사 합치기, 만단위 띄어쓰기 옵션(spacing) 적용
  const result = converted.reverse().join(spacing ? ' ' : '');

  // 소수점 자리 한글
  let dpStr = '';

  // 소수점 자리 표현
  if (decimalPlaces) {
    dpStr = '점';
    if (decimalPlaces >> 0 > 0) {
      decimalPlaces.split('').forEach((dn) => {
        dpStr += GISUSA_DIGITS_1[dn >> 0].label;
      });
    } else dpStr += GISUSA_DIGITS_1[0].label;
  }

  // 음수일 경우 앞에 '-' 붙이기
  return `${IS_NEGATIVE ? '-' : ''}${result}${dpStr}`;
}

// 1e+8 형태의 number를 '100000000' string으로 변환
function toFixedString(x) {
  if (Math.abs(x) < 1.0) {
    const e = parseInt(x.toString().split('e-')[1], 10);
    if (e) {
      x *= 10 ** (e - 1);
      x = `0.${new Array(e).join('0')}${x.toString().substring(2)}`;
    }
  } else {
    let e = parseInt(x.toString().split('+')[1], 10);
    if (e > 20) {
      e -= 20;
      x /= 10 ** e;
      x += new Array(e + 1).join('0');
    }
  }
  return `${x}`;
}
