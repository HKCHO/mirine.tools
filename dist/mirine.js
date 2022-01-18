/*!
 * 
 *   mirine.tools v0.0.2
 *   https://github.com/hkcho/mirine.tools
 *
 *   Copyright (c) 조현권 (https://github.com/hkcho) 그리고 프로젝트 기여자.
 *
 *   이 소스코드는 루트 디렉터리에 있는 'LICENSE' 파일에 명시된 'Apache-2.0' 라이센스에 따라 라이센스가 부여됩니다.
 *
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["mirine"] = factory();
	else
		root["mirine"] = factory();
})(self, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "company": () => (/* reexport */ company),
  "default": () => (/* binding */ lib),
  "hangeul": () => (/* reexport */ hangeul),
  "misc": () => (/* reexport */ misc),
  "saram": () => (/* reexport */ saram)
});

;// CONCATENATED MODULE: ./src/lib/utils/string-utils.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * 문자관련 도구모음
 *
 * @ignore
 * @author hkcho
 */
var StringUtils = /*#__PURE__*/function () {
  function StringUtils() {
    _classCallCheck(this, StringUtils);

    // eslint-disable-next-line no-throw-literal
    throw '인스턴스화 할 수 없습니다.';
  }
  /**
   * 알파벳과 숫자로 이루어져 있는지 검사
   *
   * @param {string} str 검사할 문자열
   *
   * @author hkcho
   */


  _createClass(StringUtils, null, [{
    key: "isAlphaNumeric",
    value: function isAlphaNumeric(str) {
      if (/\s/g.test(str) || /[^a-zA-Z0-9]/g.test(str)) {
        return false;
      }

      return /[\w\d]/g.test(str);
    }
    /**
     * 숫자 형식의 문자열인지 검사
     *
     * @param {string | number} str 검사할 문자열
     *
     * @author hkcho
     */

  }, {
    key: "isNumeric",
    value: function isNumeric(str) {
      if (typeof str !== 'string') return false;
      return !Number.isNaN(str) && !Number.isNaN(parseFloat(str));
    }
  }]);

  return StringUtils;
}();

/* harmony default export */ const string_utils = (StringUtils); // 완성형 한글 정규식

var REGEX_COMPLETE_KOREAN = /^[가-힣]+$/;
;// CONCATENATED MODULE: ./src/lib/saram/registrationNo.js


/**
 * 주민등록번호 또는 외국인등록번호인지 확인.
 *
 * @method
 * @ignore
 * @param {string} registrationNo 주민 또는 외국인 등록번호
 * @param {string} type {@link RegNoTypes 등록번호 타입}
 * @returns {boolean} 주민/외국인 번호의 유효성
 */

function validateRegistrationNumber(registrationNo, type) {
  var rn = "".concat(registrationNo).trim().split('-').join(''); // 하이픈(-)이 있을경우 제거
  // 등록번호 형태의 문자열이 아님

  if (!string_utils.isNumeric(rn) || rn.length !== 13) {
    return false;
  }

  var checkSum = 0; // 검증값 합계

  for (var i = 0; i < 12; i++) {
    checkSum += (rn.substr(i, 1) >> 0) * (i % 8 + 2);
  } // 주민등록번호 매치


  var rrnMatch = "".concat((11 - checkSum % 11) % 10) === rn.substr(12, 1); // 외국인등록번호 매치

  var frnMatch = "".concat((13 - checkSum % 11) % 10) === rn.substr(12, 1);
  if (type === RegNoTypes.RRN) return rrnMatch;
  if (type === RegNoTypes.FRN) return frnMatch;
  return rrnMatch || frnMatch;
}
/**
 * 등록번호타입
 *
 * @ignore
 * @constant
 * @name 등록번호 타입
 * @namespace RegNoTypes
 */


var RegNoTypes = Object.freeze({
  /**
   * 주민등록번호
   * @memberOf RegNoTypes
   * @inner
   */
  RRN: 'rrn',

  /**
   * 외국인등록번호
   * @memberOf RegNoTypes
   * @inner
   */
  FRN: 'frn'
});
;// CONCATENATED MODULE: ./src/lib/saram/validateKoreanName.js

/* harmony default export */ const validateKoreanName = ({
  validateKoreanName: validateKoreanName_validateKoreanName
});
/**
 * 한글 이름을 유효성검사 합니다.
 *
 * <pre>
 *     - "조현권", "남궁현권", "황금독수리", "고고한허수아비"  => true
 *     - "조 현권", "", "조현권ㅏ", "조현ㄱ", "조"        => false
 * </pre>
 *
 * @method
 * @see REGEX_COMPLETE_KOREAN
 * @param name {string} 한글이름
 * @returns {boolean} 한글이름 유효성
 *
 * @author hkcho
 */

function validateKoreanName_validateKoreanName(name) {
  // 입력값이 '문자열이 아니'거나 '공백문자'거나 '한 글자'일 경우
  if (typeof name !== 'string' || name.trim().length <= 1) return false;
  return name.match(REGEX_COMPLETE_KOREAN) !== null;
}
;// CONCATENATED MODULE: ./src/lib/saram/constants/index.js
/**
 * 주민등록번호상 성별
 * @type {{MALE: string, FEMALE: string}}
 */
var Gender = {
  /** 여성 */
  FEMALE: 'F',

  /** 남성 */
  MALE: 'M'
};
/* harmony default export */ const constants = ({
  Gender: Gender
});
;// CONCATENATED MODULE: ./src/lib/saram/getGender.js


/**
 * 주민/외국인 등록번호상 '생년'과 주민등록번호 뒷자리 첫번째 수로 성별을 확인합니다.
 * - 확인할 수 없는 조합의 경우 `null`을 반환합니다
 *
 * <i>[올바른 사용]</i>
 * <pre>
 *     saram.getGender(1988, 1)
 *     saram.getGender('1988', '1')
 * </pre>
 *
 * <i>[잘못된 사용]</i>
 * <pre>
 *     saram.getGender(88, 1)
 *     saram.getGender('88', '1')
 *     saram.getGender('88', '312')
 * </pre>
 *
 * @param {string | number} birthYear 생년
 * @param {string | number} regno0 성별 숫자
 * @return {string | null} 남성: 'M', 여성: 'F', 알 수 없음: null
 *
 * @author hkcho
 */

function getGender(birthYear, regno0) {
  // 올바르지 않은 생년 - 숫자형태의 문자열이 아닐경우
  if (!string_utils.isNumeric("".concat(birthYear))) {
    return null;
  } // 올바르지 않은 생년 - 4자리 수가 아닐경우


  if ("".concat(birthYear).length !== 4) {
    return null;
  } // 생년 - 4자리수


  var bYear = birthYear >> 0; // 올바르지 않은 성별 번호

  if (typeof regno0 === 'undefined' || regno0 === null || "".concat(regno0).trim().length === 0) {
    return null;
  } // 주민등록번호 성별


  var r0 = regno0 >> 0; // 주민등록번호 첫번 째 자리가 0 ~ 9 사이의 숫자가 아닐 경우

  if (r0 < 0 || r0 > 9) {
    return null;
  } // 1900년 이전 출생자 ( ~ 1899년)


  if (bYear < 1900) {
    // 한국남성
    if (r0 === 9) return constants.MALE; // 한국여성

    if (r0 === 0) return constants.FEMALE;
    return null;
  } // 1900년대 출생자 (1900년 ~ 1999년)


  if (bYear >= 1900 && bYear < 2000) {
    // 한국남성
    if (r0 === 1) return constants.MALE; // 한국여성

    if (r0 === 2) return constants.FEMALE; // 외국남성

    if (r0 === 5) return constants.MALE; // 외국여성

    if (r0 === 6) return constants.FEMALE;
    return null;
  } // 2000년대 출생자 (2000년 ~ ). 2100년에 업데이트가 필요합니다.


  if (bYear >= 2000) {
    // 한국남성
    if (r0 === 3) return constants.MALE; // 한국여성

    if (r0 === 4) return constants.FEMALE; // 외국남성

    if (r0 === 7) return constants.MALE; // 외국여성

    if (r0 === 8) return constants.FEMALE;
    return null;
  }

  return null;
}
;// CONCATENATED MODULE: ./src/lib/saram/index.js



/**
 * 사람과 관련된 도구모음
 */

/* harmony default export */ const saram = ({
  isRegistrationNo: isRegistrationNo,
  // 주민/외국인 등록번호 검사
  isJuminRegistrationNo: isJuminRegistrationNo,
  // 주민등록번호 검사
  isForeignRegistrationNo: isForeignRegistrationNo,
  // 외국인 등록번호 검사
  getGender: getGender,
  // '생년', '성별숫자'로 성별 확인
  validateKoreanName: validateKoreanName_validateKoreanName // 한글이름 유효성검사

});
/**
 * 주민등록번호 또는 외국인등록번호인지 확인.
 *
 * @see validateRegistrationNumber
 * @param {string} registrationNo 주민 또는 외국인 등록번호
 * @returns {boolean} 주민/외국인 번호의 유효성
 */

function isRegistrationNo(registrationNo) {
  return validateRegistrationNumber(registrationNo);
}
/**
 * 주민등록번호 여부 확인.
 *
 * @see validateRegistrationNumber
 * @param {string} registrationNo 주민등록번호
 * @returns {boolean} 주민등록번호 유효성
 */


function isJuminRegistrationNo(registrationNo) {
  return validateRegistrationNumber(registrationNo, RegNoTypes.RRN);
}
/**
 * 외국인등록번호 여부 확인.
 *
 * @see validateRegistrationNumber
 * @param {string} registrationNo 외국인등록번호
 * @returns {boolean} 외국인등록번호 유효성
 */


function isForeignRegistrationNo(registrationNo) {
  return validateRegistrationNumber(registrationNo, RegNoTypes.FRN);
}
;// CONCATENATED MODULE: ./src/lib/company/isCompanyRegistrationNo.js

/**
 * 사업자 등록번호 유효성 검사
 *
 * @param {string} registrationNo 사업자등록번호
 * @returns {boolean} 사업자등록번호 유효성
 */

function isCompanyRegistrationNo(registrationNo) {
  var rn = "".concat(registrationNo).trim().split('-').join(''); // 하이픈(-)이 있을경우 제거
  // 사업자 등록번호 형태의 문자열이 아님

  if (!string_utils.isNumeric(rn) || rn.length !== 10) {
    return false;
  }

  var checkSet = [1, 3, 7, 1, 3, 7, 1, 3, 5];
  var checkSum = 0;
  checkSet.forEach(function (d, i) {
    checkSum += d * rn[i];
  });
  checkSum += parseInt(checkSet[8] * rn[8] / 10, 10);
  return Math.floor(rn[9]) === (10 - checkSum % 10) % 10;
}
;// CONCATENATED MODULE: ./src/lib/company/isCorporateRegistrationNo.js

/**
 * 법인 등록번호 유효성 검사
 *
 * 참고: [법인및재외국민의부동산등기용등록번호부여에관한규칙]{@link https://www.law.go.kr/LSW/lsInfoP.do?lsiSeq=57867#0000}
 *
 * @param {string} registrationNo 법인등록번호
 * @returns {boolean} 법인등록번호 유효성
 *
 * @author hkcho
 */

function isCorporateRegistrationNo(registrationNo) {
  var rn = "".concat(registrationNo).trim().split('-').join(''); // 하이픈(-)이 있을경우 제거
  // 법인등록번호 형태의 문자열이 아님

  if (!string_utils.isNumeric(rn) || rn.length !== 13) {
    return false;
  }

  var checkSum = 0; // 검증값 합계

  for (var i = 0; i < 12; i++) {
    checkSum += (rn.substr(i, 1) >> 0) * (i % 2 + 1);
  }

  return "".concat((10 - checkSum % 10) % 10) === rn.substr(12, 1);
}
;// CONCATENATED MODULE: ./src/lib/company/Corporation.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function Corporation_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Corporation_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Corporation_createClass(Constructor, protoProps, staticProps) { if (protoProps) Corporation_defineProperties(Constructor.prototype, protoProps); if (staticProps) Corporation_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/**
 * 법인
 *
 * @since 1.0.0
 *
 * @author hkcho
 */

var Corporation = /*#__PURE__*/function () {
  /** 법인번호 */
  function Corporation(corporationData) {
    Corporation_classCallCheck(this, Corporation);

    _defineProperty(this, "registrationNo", null);

    if (_typeof(corporationData) === 'object') {
      // 법인 등록번호
      if (corporationData.registrationNo) this.registrationNo = corporationData.registrationNo;
    }
  }
  /**
   * 법인번호 유효성검사
   * @return {boolean} 법인번호 유효성
   */


  Corporation_createClass(Corporation, [{
    key: "isValidCorpRegistrationNo",
    value: function isValidCorpRegistrationNo() {
      return isCorporateRegistrationNo(this.registrationNo);
    }
    /**
     * 법인종류 조회
     */

  }, {
    key: "getType",
    value: function getType() {
      if (!this.isValidCorpRegistrationNo()) return null; // 법인종류별 분류번호 추출

      var categoryNo = extractCategoryNo(this.registrationNo); // 법인종류

      var type = null; // 분류번호로 법인종류 찾기 TODO Refactoring

      for (var _i = 0, _Object$keys = Object.keys(Corporation.category); _i < _Object$keys.length; _i++) {
        var categoryNm = _Object$keys[_i];
        var category = Corporation.category[categoryNm];

        if (categoryNo === category.no) {
          type = category.type;
          break;
        }
      }

      return type;
    }
    /**
     * 법률근거 조회
     */

  }, {
    key: "getLegalBasis",
    value: function getLegalBasis() {
      if (!this.isValidCorpRegistrationNo()) return null; // 법인종류별 분류번호 추출

      var categoryNo = extractCategoryNo(this.registrationNo); // 법률근거

      var legalBasis = null; // 분류번호로 법률근거 찾기 TODO Refactoring

      for (var _i2 = 0, _Object$keys2 = Object.keys(Corporation.category); _i2 < _Object$keys2.length; _i2++) {
        var categoryNm = _Object$keys2[_i2];
        var category = Corporation.category[categoryNm];

        if (categoryNo === category.no) {
          legalBasis = category.legalBasis;
          break;
        }
      }

      return legalBasis;
    }
    /**
     * 법인종류
     *
     * @readonly
     * @constant
     */

  }]);

  return Corporation;
}();
/**
 * 법인종류별 분류번호 추출
 *
 * @private
 * @function
 * @param registrationNo    법인번호
 * @return {string}         법인종류별 분류번호
 */


_defineProperty(Corporation, "types", {
  /** 상법법인 */
  COMMERCIAL: {
    value: 'commercial',
    label: '상법법인'
  },

  /** 민법법인 */
  CIVIL: {
    value: 'civil',
    label: '민법법인'
  },

  /** 특수법인 */
  SPECIAL: {
    value: 'special',
    label: '특수법인'
  },

  /** 외국법인 */
  FOREIGN: {
    value: 'foreign',
    label: '외국법인'
  },

  /** 기타법인 */
  ETC: {
    value: 'etc',
    label: '기타'
  }
});

_defineProperty(Corporation, "legalBasis", {
  /** 상법 */
  COMMERCIAL: {
    value: 'commercial',
    label: '상법',
    type: Corporation.types.COMMERCIAL
  },

  /** 민법 */
  CIVIL: {
    value: 'civil',
    label: '민법',
    type: Corporation.types.CIVIL
  },

  /** 사립학교법 */
  PRIVATE_SCHOOL: {
    value: 'private_school',
    label: '사립학교법',
    type: Corporation.types.SPECIAL
  },

  /** 사회복지사법 */
  SOCIAL_WORKER: {
    value: 'social_worker',
    label: '사회복지사법',
    type: Corporation.types.SPECIAL
  },

  /** 의료법 */
  MEDICAL: {
    value: 'medical',
    label: '의료법',
    type: Corporation.types.SPECIAL
  },

  /** 공인회계사법 */
  CERTIFIED_ACCOUNTANT: {
    value: 'certified_accountant',
    label: '공인회계사법',
    type: Corporation.types.SPECIAL
  },

  /** 한국은행법등 */
  BANK_OF_KOREA: {
    value: 'bank_of_korea',
    label: '한국은행법등',
    type: Corporation.types.SPECIAL
  },

  /** 농업협동조합법 */
  ALPC_COOP: {
    value: 'agricultural_cooperatives',
    label: '농업협동조합법',
    type: Corporation.types.SPECIAL
  },

  /** 축산업협동조합법 */
  LIVESTOCK_COOP: {
    value: 'livestock_cooperatives',
    label: '축산업협동조합법',
    type: Corporation.types.SPECIAL
  },

  /** 수산업협동조합법 */
  FISHERIES_COOP: {
    value: 'fisheries_cooperatives',
    label: '수산업협동조합법',
    type: Corporation.types.SPECIAL
  },

  /** 산림조합법 */
  FORESTRY_COOP: {
    value: 'forestry_cooperatives',
    label: '산림조합법',
    type: Corporation.types.SPECIAL
  },

  /** 중소기업협동조합법 */
  SMALL_MEDIUM_ENTERPRISE_COOP: {
    value: 'small_and_medium_enterprise_cooperatives',
    label: '중소기업협동조합법',
    type: Corporation.types.SPECIAL
  },

  /** 신용협동조합법 */
  CREDIT_COOP: {
    value: 'credit_cooperatives',
    label: '신용협동조합법',
    type: Corporation.types.SPECIAL
  },

  /** 농촌근대화촉진법 */
  ALPC_CMTY_MODERN_PROMO: {
    value: 'agricultural_community_modernization_promotion',
    label: '농촌근대화촉진법',
    type: Corporation.types.SPECIAL
  },

  /** 노동조합법 */
  LABOR_UNION: {
    value: 'labor_union',
    label: '노동조합법',
    type: Corporation.types.SPECIAL
  },

  /** 새마을금고법 */
  CMTY_CREDIT_COOP: {
    value: 'community_credit_cooperatives',
    label: '새마을금고법',
    type: Corporation.types.SPECIAL
  },

  /** 의료보험조합법 */
  MEDICAL_INS_ASSOC: {
    value: 'medical_insurance_association',
    label: '의료보험조합법',
    type: Corporation.types.SPECIAL
  },

  /** 변호사법 */
  ATTORNEYS: {
    value: 'attorneys_at_law',
    label: '변호사법',
    type: Corporation.types.SPECIAL
  },

  /** 상공회의소법 */
  CHAMBERS_OF_COMM_N_IND: {
    value: 'chambers_of_commerce_and_industry',
    label: '상공회의소법',
    type: Corporation.types.SPECIAL
  },

  /** 상호신용금고법 */
  MUTUAL_SAVINGS_N_FIN_CO: {
    value: 'mutual_savings_and_finance_company',
    label: '상호신용금고법',
    type: Corporation.types.SPECIAL
  },

  /** 자동차운수사업법 */
  AUTO_TRANS_BIZ: {
    value: 'automobile_transport_business',
    label: '자동차운수사업법',
    type: Corporation.types.SPECIAL
  },

  /** 공업협동조합법 */
  MANUFACTURING_IND_COOP: {
    value: 'manufacturing_industry_cooperatives',
    label: '공업협동조합법',
    type: Corporation.types.SPECIAL
  }
});

_defineProperty(Corporation, "category", {
  /**
   * 주식회사
   */
  CORPORATION: {
    no: 11,
    value: 'corporation',
    label: '주식회사',
    type: Corporation.types.COMMERCIAL,
    legalBasis: Corporation.legalBasis.COMMERCIAL
  },

  /** 합명회사 */
  UNLIMITED: {
    no: 12,
    value: 'unlimited',
    label: '합명회사',
    type: Corporation.types.COMMERCIAL,
    legalBasis: Corporation.legalBasis.COMMERCIAL
  },

  /** 합자회사 */
  PARTNERSHIP: {
    no: 13,
    value: 'partnership',
    label: '합자회사',
    type: Corporation.types.COMMERCIAL,
    legalBasis: Corporation.legalBasis.COMMERCIAL
  },

  /** 유한회사 */
  LIMITED: {
    no: 14,
    value: 'limited',
    label: '유한회사',
    type: Corporation.types.COMMERCIAL,
    legalBasis: Corporation.legalBasis.COMMERCIAL
  },

  /** 사단법인 */
  INCORPORATED_ASSOCIATION: {
    no: 21,
    value: 'incorporated_association',
    label: '사단법인',
    legalBasis: Corporation.legalBasis.CIVIL
  },

  /** 재단법인 */
  FOUNDATION: {
    no: 22,
    value: 'foundation',
    label: '재단법인',
    type: Corporation.types.CIVIL,
    legalBasis: Corporation.legalBasis.CIVIL
  },

  /** 학교법인 */
  EDUCATIONAL_FOUNDATION: {
    no: 31,
    value: 'educational_foundation',
    label: '학교법인',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.PRIVATE_SCHOOL
  },

  /** 사회복지법인  */
  SOCIAL_WELFARE: {
    no: 32,
    value: 'social_welfare',
    label: '사회복지법인',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.SOCIAL_WORKER
  },

  /** 의료법인 */
  MEDICAL: {
    no: 33,
    value: 'medical',
    label: '의료법인',
    legalBasis: Corporation.legalBasis.MEDICAL
  },

  /** 회계법인 */
  ACCOUNTING_FIRM: {
    no: 34,
    value: 'accounting_firm',
    label: '회계법인',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.CERTIFIED_ACCOUNTANT
  },

  /** 특별법에 의한 은행 */
  SPECIAL_CASE_BANK: {
    no: 35,
    value: 'special_case_bank',
    label: '특별법에 의한 은행',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.BANK_OF_KOREA
  },

  /** 단위농업협동조합 */
  UNIT_ALPC_COOP: {
    no: 36,
    value: 'unit_agricultural_cooperatives',
    label: '단위농업협동조합',
    legalBasis: Corporation.legalBasis.ALPC_COOP
  },

  /** 특수농업협동조합(양잠협동조합) */
  SPECIAL_ALPC_COOP: {
    no: 36,
    value: 'unit_agricultural_cooperatives',
    label: '특수농업협동조합(양잠협동조합)',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.ALPC_COOP
  },

  /** 농업협동조합중앙회 */
  ALPC_COOP_CENTER: {
    no: 36,
    value: 'agricultural_cooperatives_center',
    label: '농업협동조합중앙회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.ALPC_COOP
  },

  /** 지역별축산업협동조합 */
  PROVINCE_LIVESTOCK_COOP: {
    no: 37,
    value: 'province_livestock_cooperatives',
    label: '지역별축산업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.LIVESTOCK_COOP
  },

  /** 업종별축산업협동조합 */
  LIVESTOCK_COOP_BY_BIZ: {
    no: 37,
    value: 'livestock_cooperatives_by_business',
    label: '업종별축산업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.LIVESTOCK_COOP
  },

  /** 축산업협동조합중앙회 */
  LIVESTOCK_COOP_CENTER: {
    no: 37,
    value: 'livestock_cooperatives_center',
    label: '축산업협동조합중앙회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.LIVESTOCK_COOP
  },

  /** 지역별수산업협동조합 */
  PROVINCE_FISHERIES_COOP: {
    no: 38,
    value: 'province_fisheries_cooperatives',
    label: '지역별수산업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FISHERIES_COOP
  },

  /** 업종별수산업협동조합 */
  FISHERIES_COOP_BY_BIZ: {
    no: 38,
    value: 'fisheries_cooperatives_by_biz',
    label: '업종별수산업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FISHERIES_COOP
  },

  /** 수산물제조업협동조합 */
  FISHERIES_MANUFACTURAL_COOP: {
    no: 38,
    value: 'fisheries_manufactural_cooperatives',
    label: '수산물제조업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FISHERIES_COOP
  },

  /** 수산업협동조합중앙회 */
  FISHERIES_COOP_CENTER: {
    no: 38,
    value: 'fisheries_cooperatives_center',
    label: '수산업협동조합중앙회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FISHERIES_COOP
  },

  /** 어업협동조합 */
  FISHERIES_IND_COOP: {
    no: 38,
    value: 'fisheries_industry_cooperatives',
    label: '어업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FISHERIES_COOP
  },

  /** 어촌계 */
  FISHING_VIL_FRTRNT: {
    no: 38,
    value: 'fishing_village_fraternities',
    label: '어촌계',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FISHERIES_COOP
  },

  /** 산림조합중앙회 */
  FORESTRY_COOP_CENTER: {
    no: 39,
    value: 'forestry_cooperatives_center',
    label: '산림조합중앙회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FORESTRY_COOP
  },

  /** 산림조합 */
  FORESTRY_COOP: {
    no: 39,
    value: 'forestry_cooperatives',
    label: '산림조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FORESTRY_COOP
  },

  /** 산림계 */
  FOREST_VIL_FRTRNT: {
    no: 39,
    value: 'forest_village_fraternities',
    label: '산림계',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.FORESTRY_COOP
  },

  /** 지역별중소기업협동조합 */
  PROVINCE_SMALL_MEDIUM_ENTERPRISE_COOP: {
    no: 40,
    value: 'province_small_and_medium_enterprise_cooperatives',
    label: '지역별중소기업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP
  },

  /** 업종별중소기업협동조합 */
  SMALL_MEDIUM_ENTERPRISE_COOP_BY_BIZ: {
    no: 40,
    value: 'small_and_medium_enterprise_cooperatives_by_business',
    label: '업종별중소기업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP
  },

  /** 중소기업협동조합 */
  SMALL_MEDIUM_ENTERPRISE_COOP: {
    no: 40,
    value: 'small_and_medium_enterprise_cooperatives',
    label: '중소기업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP
  },

  /** 중소기업협동조합연합회(업종별) */
  SMALL_MEDIUM_ENTERPRISE_COOP_UNION_BY_BIZ: {
    no: 40,
    value: 'small_and_medium_enterprise_cooperatives_union_by_business',
    label: '중소기업협동조합연합회(업종별)',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP
  },

  /** 중소기업협동조합중앙회 */
  SMALL_MEDIUM_ENTERPRISE_COOP_CENTER: {
    no: 40,
    value: 'small_and_medium_enterprise_cooperatives_center',
    label: '중소기업협동조합중앙회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP
  },

  /** 신용협동조합 */
  CREDIT_COOP: {
    no: 41,
    value: 'credit_cooperatives',
    label: '신용협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.CREDIT_COOP
  },

  /** 신용협동조합연합회 */
  CREDIT_COOP_UNION: {
    no: 41,
    value: 'credit_cooperatives_union',
    label: '신용협동조합연합회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.CREDIT_COOP
  },

  /** 농지개량조합 */
  FARMLAND_IMPRV_COOP: {
    no: 42,
    value: 'farmland_improvement_cooperatives',
    label: '농지개량조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.ALPC_CMTY_MODERN_PROMO
  },

  /** 농지개량조합연합회 */
  FARMLAND_IMPRV_COOP_UNION: {
    no: 42,
    value: 'farmland_improvement_cooperatives_union',
    label: '농지개량조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.ALPC_CMTY_MODERN_PROMO
  },

  /** 농업진흥공사 */
  AGRICULTURAL_DEV_CORP: {
    no: 42,
    value: 'agricultural_development_corporation',
    label: '농업진흥공사',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.ALPC_CMTY_MODERN_PROMO
  },

  /** 노동조합 */
  LABOR_UNION: {
    no: 43,
    value: 'labor_union',
    label: '노동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.LABOR_UNION
  },

  /** 새마을금고(마을금고) */
  CMTY_CREDIT_COOP: {
    no: 44,
    value: 'community_credit_cooperatives',
    label: '새마을금고(마을금고)',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.CMTY_CREDIT_COOP
  },

  /** 새마을금고연합회 */
  CMTY_CREDIT_COOP_UNION: {
    no: 44,
    value: 'community_credit_cooperatives_union',
    label: '새마을금고(마을금고)',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.CMTY_CREDIT_COOP
  },

  /** 의료보험조합 */
  MEDICAL_INS_ASSOC: {
    no: 45,
    value: 'medical_insurance_association',
    label: '의료보험조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MEDICAL_INS_ASSOC
  },

  /** 법무법인 */
  LAW_FIRM: {
    no: 46,
    value: 'law_firm',
    label: '법무법인',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.ATTORNEYS
  },

  /** 상공회의소 */
  CHAMBERS_OF_COMM_N_IND: {
    no: 47,
    value: 'chambers_of_commerce_and_industry',
    label: '상공회의소',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.CHAMBERS_OF_COMM_N_IND
  },

  /** 상호신용금고 */
  MUTUAL_SAVINGS_N_FIN_CO: {
    no: 48,
    value: 'mutual_savings_and_finance_company',
    label: '상호신용금고',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MUTUAL_SAVINGS_N_FIN_CO
  },

  /** 상호신용금고연합회 */
  MUTUAL_SAVINGS_N_FIN_CO_UNION: {
    no: 48,
    value: 'mutual_savings_and_finance_company_union',
    label: '상호신용금고연합회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MUTUAL_SAVINGS_N_FIN_CO
  },

  /** 상호신용보증기금 */
  MUTUAL_CREDIT_GUARANTEE_FUND: {
    no: 48,
    value: 'mutual_credit_guarantee_fund',
    label: '상호신용보증기금',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MUTUAL_SAVINGS_N_FIN_CO
  },

  /** 자동차운송사업조합 */
  AUTOMOBILE_TRANSPORT_BIZ_ASSOC: {
    no: 49,
    value: 'automobile_transport_business_association',
    label: '자동차운송사업조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.AUTO_TRANS_BIZ
  },

  /** 자동차운송사업연합회 */
  AUTOMOBILE_TRANSPORT_BIZ_UNION: {
    no: 49,
    value: 'automobile_transport_business_union',
    label: '자동차운송사업연합회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.AUTO_TRANS_BIZ
  },

  /** 단위공업협동조합 */
  UNIT_IND_COOP: {
    no: 50,
    value: 'unit_industry_cooperatives',
    label: '단위공업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MANUFACTURING_IND_COOP
  },

  /** 특수공업협동조합 */
  SPECIAL_IND_COOP: {
    no: 50,
    value: 'special_industry_cooperatives',
    label: '특수공업협동조합',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MANUFACTURING_IND_COOP
  },

  /** 공업협동조합중앙회 */
  IND_COOP_CENTER: {
    no: 50,
    value: 'industry_cooperatives_center',
    label: '공업협동조합중앙회',
    type: Corporation.types.SPECIAL,
    legalBasis: Corporation.legalBasis.MANUFACTURING_IND_COOP
  },

  /** 분류할 수 없는 법인 */
  UNCATEGORIZED_CORPORATION: {
    no: 71,
    value: 'uncategorized_corporation',
    label: '분류할 수 없는 법인',
    type: Corporation.types.ETC,
    legalBasis: null
  },

  /** 외국 주식회사 */
  FOREIGN_CORPORATION: {
    no: 81,
    value: 'foreign_corporation',
    label: '주식회사',
    type: Corporation.types.FOREIGN,
    legalBasis: null
  },

  /** 외국 합명회사 */
  FOREIGN_UNLIMITED: {
    no: 82,
    value: 'foreign_unlimited',
    label: '합명회사',
    type: Corporation.types.FOREIGN,
    legalBasis: null
  },

  /** 외국 합자회사 */
  FOREIGN_PARTNERSHIP: {
    no: 83,
    value: 'foreign_partnership',
    label: '합자회사',
    type: Corporation.types.FOREIGN,
    legalBasis: null
  },

  /** 외국 유한회사 */
  FOREIGN_LIMITED: {
    no: 84,
    value: 'foreign_limited',
    label: '유한회사',
    type: Corporation.types.FOREIGN,
    legalBasis: null
  },

  /** 외국 기타 */
  FOREIGN_OTHER: {
    no: 85,
    value: 'foreign_other',
    label: '기타',
    type: Corporation.types.FOREIGN,
    legalBasis: null
  }
});

function extractCategoryNo(registrationNo) {
  return registrationNo.substr(4, 2) >> 0;
}

/* harmony default export */ const company_Corporation = (Corporation);
;// CONCATENATED MODULE: ./src/lib/company/getCorpType.js

/**
 * 법인번호에서 법인종류 가져오기
 *
 * @see Corporation#getType
 * @param registrationNo 법인번호
 *
 * @author hkcho
 */

function getCorpType(registrationNo) {
  var corporation = new company_Corporation({
    registrationNo: registrationNo
  }); // 법인등록번호 유효성 검사

  if (!corporation.isValidCorpRegistrationNo()) return null;
  return corporation.getType();
}
;// CONCATENATED MODULE: ./src/lib/company/index.js




/**
 * 회사관련 도구모음
 */

/* harmony default export */ const company = ({
  /** 사업자 등록번호 유효성 검사 */
  isCompanyRegistrationNo: isCompanyRegistrationNo,

  /** 법인 등록번호 유효성 검사 */
  isCorporateRegistrationNo: isCorporateRegistrationNo,

  /** 법인번호에서 법인분류정보 추출 */
  getCorporationType: getCorpType,

  /** 법인 */
  Corporation: company_Corporation
});
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/constants.js

/** 가 */

var HANGEUL_BASE = 0xac00;
var HANGEUL_END = 0xd7af;
var JONG_LIST = ['', 'ㄱ', 'ㄲ', 'ㄳ', 'ㄴ', 'ㄵ', 'ㄶ', 'ㄷ', 'ㄹ', 'ㄺ', 'ㄻ', 'ㄼ', 'ㄽ', 'ㄾ', 'ㄿ', 'ㅀ', 'ㅁ', 'ㅂ', 'ㅄ', 'ㅅ', 'ㅆ', 'ㅇ', 'ㅈ', 'ㅊ', 'ㅋ', 'ㅌ', 'ㅍ', 'ㅎ'];
var JONG = {
  // 'ㄹ'의 종성 인덱스
  RIEUL_IDX: JONG_LIST.indexOf('ㄹ')
};
;// CONCATENATED MODULE: ./src/lib/hangeul/susa/constants.js

/**
 * 기수사 1의 자리 상수
 */

var GISUSA_DIGITS_1 = [{
  num: 0,
  label: '영'
}, {
  num: 1,
  label: '일'
}, {
  num: 2,
  label: '이'
}, {
  num: 3,
  label: '삼'
}, {
  num: 4,
  label: '사'
}, {
  num: 5,
  label: '오'
}, {
  num: 6,
  label: '육'
}, {
  num: 7,
  label: '칠'
}, {
  num: 8,
  label: '팔'
}, {
  num: 9,
  label: '구'
}];
/**
 * 기수사 반복단위 (10)
 */

var GISUSA_DIGITS_10 = [[0, ''], [10, '십'], [100, '백'], [1000, '천']];
/**
 * 기수사 단위 (100)
 */

var GISUSA_DIGITS_100 = [[1, ''], [1e4, '만'], [1e8, '억'], [1e12, '조'], [1e16, '경'], [1e20, '해'], [1e24, '자'], [1e28, '양'], [1e32, '구'], [1e36, '간']];
/**
 * 기수사 타입
 */

var GISUSA_TYPES = Object.freeze({
  /** 일반 */
  NORMAL: 1,
  // 1110 => 천백십

  /** 은행 */
  BANK: 2 // 1110 => 일천일백일십

});
;// CONCATENATED MODULE: ./src/lib/hangeul/susa/numberToGisusa.js
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }


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

function numberToGisusa(number) {
  var type = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : GISUSA_TYPES.NORMAL;
  var spacing = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
  // 유효한 'number'?
  if (typeof number === 'string') number = number.replace(',', '');

  if (Number.isNaN(number)) {
    return number;
  } // Optional option.


  if (typeof type === 'boolean') {
    spacing = type;
    type = GISUSA_TYPES.NORMAL;
  }

  var num = parseFloat(number);
  if (num === 0) return GISUSA_DIGITS_1[0].label; // 음수여부 => 음수표현근거 (https://www.korean.go.kr/front/onlineQna/onlineQnaView.do?mn_id=216&qna_seq=90574)

  var IS_NEGATIVE = num < 0;
  if (IS_NEGATIVE) num *= -1; // 기수사 변환 가능한 최대 수

  var _GISUSA_DIGITS_ = _slicedToArray(GISUSA_DIGITS_100[GISUSA_DIGITS_100.length - 1], 1),
      biggest = _GISUSA_DIGITS_[0];

  var maxLen = Math.ceil(Math.log10(biggest + 1)) + 3; // 십x, 백x, 천x (3개)
  // 변환할 숫자의 자리수

  var numLen = Math.ceil(Math.log10(num + 1)); // 기수사로 변환 가능한 범위를 넘어서버림

  if (maxLen < numLen) return number;

  var _toFixedString$split = toFixedString(num).split('.'),
      _toFixedString$split2 = _slicedToArray(_toFixedString$split, 2),
      numStr = _toFixedString$split2[0],
      decimalPlaces = _toFixedString$split2[1]; // 기수사로 변환된 결과 = 만단위로 쪼개서 역순한 후 한글로 변환


  var converted = numStr.split('').reverse().join('').match(/.{1,4}/g).map(function (bunch, idx) {
    var kor = [];
    bunch.split('').forEach(function (_char, at) {
      var n = _char >> 0;
      var s;

      if (n > 0) {
        s = GISUSA_DIGITS_1[n].label;

        if (at > 0) {
          if (n === 1 && type !== GISUSA_TYPES.BANK) {
            s = "".concat(GISUSA_DIGITS_10[at][1]);
          } else {
            s += "".concat(GISUSA_DIGITS_10[at][1]);
          }
        }

        kor.push(s);
      }
    }); // 만단위

    var bunchSuffix = kor.length > 0 ? GISUSA_DIGITS_100[idx][1] : '';
    return "".concat(kor.reverse().join('')).concat(bunchSuffix);
  }); // 역순한 변환 기수사 합치기, 만단위 띄어쓰기 옵션(spacing) 적용

  var result = converted.reverse().join(spacing ? ' ' : ''); // 소수점 자리 한글

  var dpStr = ''; // 소수점 자리 표현

  if (decimalPlaces) {
    dpStr = '점';

    if (decimalPlaces >> 0 > 0) {
      decimalPlaces.split('').forEach(function (dn) {
        dpStr += GISUSA_DIGITS_1[dn >> 0].label;
      });
    } else dpStr += GISUSA_DIGITS_1[0].label;
  } // 음수일 경우 앞에 '-' 붙이기


  return "".concat(IS_NEGATIVE ? '-' : '').concat(result).concat(dpStr);
} // 1e+8 형태의 number를 '100000000' string으로 변환

function toFixedString(x) {
  if (Math.abs(x) < 1.0) {
    var e = parseInt(x.toString().split('e-')[1], 10);

    if (e) {
      x *= Math.pow(10, e - 1);
      x = "0.".concat(new Array(e).join('0')).concat(x.toString().substring(2));
    }
  } else {
    var _e2 = parseInt(x.toString().split('+')[1], 10);

    if (_e2 > 20) {
      _e2 -= 20;
      x /= Math.pow(10, _e2);
      x += new Array(_e2 + 1).join('0');
    }
  }

  return "".concat(x);
}
;// CONCATENATED MODULE: ./src/lib/hangeul/getJongseongIndex.js

/**
 * 낱말의 종성 인덱스 확인
 * @param word 단어
 * @return {number} 종성 인덱스
 */

function getJongseongIndex(word) {
  // 마지막 단어
  var lastChar = "".concat(word).charAt(word.length - 1);
  return (lastChar.charCodeAt(0) - HANGEUL_BASE) % 28;
}
;// CONCATENATED MODULE: ./src/lib/hangeul/isEndWithBatchim.js



/**
 * <h3>단어의 마지막 글자가 받침을 가지고 있는지 확인합니다</h3>
 *  - 한글단어 지원
 *  - 숫자 지원
 * <br/>
 * @example
 * hangeul.isEndWithBatchim('조현권'); // returns true
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns false
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '이십일'
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '이십이'
 *
 * @param {string|number} word 단어
 * @return {boolean} 받침 유무 여부
 */

function isEndWithBatchim(word) {
  if (typeof word === 'undefined' || word === null) return false; // 마지막 단어

  var lastChar = "".concat(word).charAt(word.length - 1); // 숫자일 경우 기수사로 변경

  if (/\d/.test(lastChar)) {
    lastChar = numberToGisusa(lastChar);
  } // TODO 알파벳으로 마무리 될 때 종성을 처리할 수 있는 규칙이 있을까?
  // 0 = 받침 없음


  return getJongseongIndex(lastChar) !== 0;
}
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/getJosa.js


 // 받침에 따라 달라지는 조사 처리

function getJosa(word, josa) {
  var hasJong = isEndWithBatchim(word);
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
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/eulreul.js

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

function eulreul(word) {
  return getJosa(word, '을');
}
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/eunneun.js

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

function eunneun_eulreul(word) {
  return getJosa(word, '은');
}
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/eulo.js

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

function eulo_eulreul(word) {
  return getJosa(word, '로');
}
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/iga.js

/**
 * <h3>단어 뒤에 올 '이/가' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '이' - 조현권이
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns '가' - 유혜지가
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '이' - 21이
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '가' - 22가
 *
 * @param {string|number} word 단어
 * @return {string} '이' 또는 '가'
 */

function iga_eulreul(word) {
  return getJosa(word, '이');
}
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/wagwa.js

/**
 * <h3>단어 뒤에 올 '와/과' 중 올바른 조사를 반환</h3>
 * <br/>
 * @example
 * hangeul.josa.eulreul('조현권'); // returns '과' - 조현권과
 * @example
 * hangeul.isEndWithBatchim('유혜지'); // returns '와' - 유혜지와
 * @example
 * hangeul.isEndWithBatchim(21); // returns true; '과' - 21과
 * @example
 * hangeul.isEndWithBatchim(22); // returns false; '와' - 22와
 *
 * @param {string|number} word 단어
 * @return {string} '와' 또는 '과'
 */

function wagwa_eulreul(word) {
  return getJosa(word, '와');
}
;// CONCATENATED MODULE: ./src/lib/hangeul/josa/index.js





/* harmony default export */ const josa = ({
  eulreul: eulreul,
  eunneun: eunneun_eulreul,
  eulo: eulo_eulreul,
  iga: iga_eulreul,
  wagwa: wagwa_eulreul
});
;// CONCATENATED MODULE: ./src/lib/hangeul/susa/index.js

/* harmony default export */ const susa = ({
  numberToGisusa: numberToGisusa
});
;// CONCATENATED MODULE: ./src/lib/hangeul/index.js



/**
 * 한글관련 도구모음
 */

/* harmony default export */ const hangeul = ({
  josa: josa,
  susa: susa,
  isEndWithBatchim: isEndWithBatchim
});
;// CONCATENATED MODULE: ./src/lib/misc/validateEmail.js
/* harmony default export */ const validateEmail = (validateEmail_validateEmail);
/**
 * <h3>이메일 주소 유효성 검사</h3>
 * <i>현존하는 이메일 주소의 99.99%에 대해 유효성검사가 가능합니다.</i>
 * <p>정규표현식은 `RFC 5332` 공식 표준에 근거합니다.</p>
 * <br/>
 * @example
 * misc.validateEmail('eddie88cho@gmail.com');  // returns true
 * @example
 * misc.validateEmail('invalid_char😀@test.com');  // returns false
 *
 * @param {string} email 이메일주소
 * @return {boolean}  이메일 유효성
 *
 * @author hkcho
 */

function validateEmail_validateEmail(email) {
  return EMAIL_REGEX.test(email);
}
/**
 * 이메일 주소 정규표현식
 *  - [RFC 5332]{@link https://www.ietf.org/rfc/rfc5322.txt} 공식 표준에 따른 이메일 주소 정규식
 *
 * @type {RegExp}
 */


var EMAIL_REGEX = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
;// CONCATENATED MODULE: ./src/lib/misc/validateURL.js
/* harmony default export */ const validateURL = (validateURL_validateURL);
/**
 * <h3>URL 정규식 검사</h3>
 * <br/>
 * @example
 * misc.validateURL('https://github.com/hkcho');  // returns true
 * @example
 * misc.validateURL('svn://private.eddie88cho.com');  // returns true
 * @example
 * misc.validateURL('mariadb://localhost:3306');  // returns true
 *
 * @param {string} urlStr  URL 주소
 * @return {boolean} URL 유효성
 *
 * @author hkcho
 */

function validateURL_validateURL(urlStr) {
  return URL_REGEX.test(urlStr);
}
/**
 * URL 정규표현식
 *
 * @type {RegExp}
 */


var URL_REGEX = /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
;// CONCATENATED MODULE: ./src/lib/misc/validateIPv4.js
/* harmony default export */ const validateIPv4 = (validateIPv4_validateIPv4);
/**
 * <h3>IPv4 주소 검사</h3>
 * <pre>
 *  IPv4주소는 인터넷주소자원 관리기관에서 부여한 네트워크 주소와 네트워크 상의 개별 호스트를 식별하기
 * 위하여 네트워크 관리자가 부여한 호스트 주소로 구성됩니다.
 *  IPv4주소는 네트워크의 크기나 호스트의 수에 따라 A, B, C, D, E 클래스로 나누어집니다.
 * A, B, C 클래스는 일반 사용자에게 부여하는 네트워크 구성용, D 클래스는 멀티캐스트용, E 클래스는 향후 사용을 위하여 예약된 주소입니다.
 * </pre>
 * <br/>
 * @example
 * misc.validateIPv4('192.168.0.1');  // returns true
 * @example
 * misc.validateIPv4('192.168.0.1', 'A');  // returns false
 * @example
 * misc.validateIPv4('192.168.0.1', 'B');  // returns false
 * @example
 * misc.validateIPv4('192.168.0.1', 'C');  // returns true
 *
 * @param ipv4 IPv4 주소
 * @param clazz IPv4 클래스
 * @return {boolean} IPv4 주소 유효성
 *
 * @author hkcho
 */

function validateIPv4_validateIPv4(ipv4, clazz) {
  if (typeof clazz === 'string') clazz.toUpperCase();
  var regex;

  switch (clazz) {
    // Class A
    case 'A':
      regex = IPV4_REGEX_A;
      break;
    // Class B

    case 'B':
      regex = IPV4_REGEX_B;
      break;
    // Class C

    case 'C':
      regex = IPV4_REGEX_C;
      break;
    // Class D

    case 'D':
      regex = IPV4_REGEX_D;
      break;
    // Class E

    case 'E':
      regex = IPV4_REGEX_E;
      break;
    // 모든 클래스

    default:
      regex = IPV4_REGEX_ALL;
  }

  return regex.test(ipv4);
}
/**
 * Class A IPv4 주소 정규식
 * <pre>
 *   [0~127].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */


var IPV4_REGEX_A = /^(12[0-7]|1[0-1][0-9]|[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Class B IPv4 주소 정규식
 * <pre>
 *   [128~191].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */

var IPV4_REGEX_B = /^(12[8-9]|1[3-8][0-9]|19[0-1])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Class C IPv4 주소 정규식
 * <pre>
 *   [192~223].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */

var IPV4_REGEX_C = /^(19[2-9]|2[0-1][0-9]|22[0-3])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Class D IPv4 주소 정규식
 * <pre>
 *   [224~239].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */

var IPV4_REGEX_D = /^(22[0-4]|23[0-9])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * Class E IPv4 주소 정규식
 * <pre>
 *   [240~255].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */

var IPV4_REGEX_E = /^(24[0-9]|25[0-5])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
/**
 * IPv4 주소 정규식
 *  - Class A ~ E
 *
 * @type {RegExp}
 */

var IPV4_REGEX_ALL = /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
;// CONCATENATED MODULE: ./src/lib/misc/index.js



/* harmony default export */ const misc = ({
  // 이메일 주소 유효성검사
  validateEmail: validateEmail,
  // URL 주소 유효성검사
  validateURL: validateURL,
  // IPv4 주소 유효성검사
  validateIPv4: validateIPv4
});
;// CONCATENATED MODULE: ./src/lib/index.js




var mirine = {
  saram: saram,
  // 사람관련 기능
  company: company,
  // 사업자 관련 기능
  hangeul: hangeul,
  // 한글 관련 기능
  misc: misc // 정의되지 않은 기능

};
/* harmony default export */ const lib = (mirine);




/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=mirine.js.map