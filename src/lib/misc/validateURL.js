export default validateURL;

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
function validateURL(urlStr) {
  return URL_REGEX.test(urlStr);
}

/**
 * URL 정규표현식
 *
 * @type {RegExp}
 */
const URL_REGEX =
  /((([A-Za-z]{3,9}:(?:\/\/)?)(?:[\-;:&=\+\$,\w]+@)?[A-Za-z0-9\.\-]+|(?:www\.|[\-;:&=\+\$,\w]+@)[A-Za-z0-9\.\-]+)((?:\/[\+~%\/\.\w\-_]*)?\??(?:[\-\+=&;%@\.\w_]*)#?(?:[\.\!\/\\\w]*))?)/;
