export { GISUSA_DIGITS_1, GISUSA_DIGITS_10, GISUSA_DIGITS_100, GISUSA_TYPES };

/**
 * 기수사 1의 자리 상수
 */
const GISUSA_DIGITS_1 = [
  { num: 0, label: '영' },
  { num: 1, label: '일' },
  { num: 2, label: '이' },
  { num: 3, label: '삼' },
  { num: 4, label: '사' },
  { num: 5, label: '오' },
  { num: 6, label: '육' },
  { num: 7, label: '칠' },
  { num: 8, label: '팔' },
  { num: 9, label: '구' },
];

/**
 * 기수사 반복단위 (10)
 */
const GISUSA_DIGITS_10 = [
  [0, ''],
  [10, '십'],
  [100, '백'],
  [1000, '천'],
];

/**
 * 기수사 단위 (100)
 */
const GISUSA_DIGITS_100 = [
  [1, ''],
  [1e4, '만'],
  [1e8, '억'],
  [1e12, '조'],
  [1e16, '경'],
  [1e20, '해'],
  [1e24, '자'],
  [1e28, '양'],
  [1e32, '구'],
  [1e36, '간'],
];

/**
 * 기수사 타입
 */
const GISUSA_TYPES = Object.freeze({
  /** 일반 */
  NORMAL: 1, // 1110 => 천백십
  /** 은행 */
  BANK: 2, // 1110 => 일천일백일십
});
