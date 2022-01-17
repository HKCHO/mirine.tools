export default validateEmail;

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
function validateEmail(email) {
  return EMAIL_REGEX.test(email);
}

/**
 * 이메일 주소 정규표현식
 *  - [RFC 5332]{@link https://www.ietf.org/rfc/rfc5322.txt} 공식 표준에 따른 이메일 주소 정규식
 *
 * @type {RegExp}
 */
const EMAIL_REGEX =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
