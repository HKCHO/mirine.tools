export default validateIPv4;

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
function validateIPv4(ipv4, clazz) {
  if (typeof clazz === 'string') clazz.toUpperCase();

  let regex;
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
const IPV4_REGEX_A =
  /^(12[0-7]|1[0-1][0-9]|[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Class B IPv4 주소 정규식
 * <pre>
 *   [128~191].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */
const IPV4_REGEX_B =
  /^(12[8-9]|1[3-8][0-9]|19[0-1])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Class C IPv4 주소 정규식
 * <pre>
 *   [192~223].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */
const IPV4_REGEX_C =
  /^(19[2-9]|2[0-1][0-9]|22[0-3])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Class D IPv4 주소 정규식
 * <pre>
 *   [224~239].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */
const IPV4_REGEX_D =
  /^(22[0-4]|23[0-9])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * Class E IPv4 주소 정규식
 * <pre>
 *   [240~255].[0~255].[0~255].[0~255]
 * </pre>
 * @type {RegExp}
 */
const IPV4_REGEX_E =
  /^(24[0-9]|25[0-5])\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;

/**
 * IPv4 주소 정규식
 *  - Class A ~ E
 *
 * @type {RegExp}
 */
const IPV4_REGEX_ALL =
  /^(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/;
