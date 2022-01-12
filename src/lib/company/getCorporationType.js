import Corporation from "./Corporation";
import {isCorporateRegistrationNo} from "./isCorporateRegistrationNo";

/**
 * 법인번호에서 법인종류
 *
 * @param registrationNo 법인번호
 */
export function getCorporationType(registrationNo) {
    let corporation = new Corporation({
        registrationNo
    });

    // 법인등록번호 유효성 검사
    if( !corporation.isValidRegistrationNo() ) return null;

    return corporation.getType();
}
