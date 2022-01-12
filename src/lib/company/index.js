import {isCompanyRegistrationNo} from "./isCompanyRegistrationNo";
import {isCorporateRegistrationNo} from "./isCorporateRegistrationNo";
import {getCorporateClassInfo} from "./getCorporateClassInfo";
/**
 * 회사관련 도구모음
 */
export const company = {
    /** 사업자 등록번호 유효성 검사*/
    isCompanyRegistrationNo,

    /** 법인 등록번호 유효성 검사*/
    isCorporateRegistrationNo,

    /** 법인번호에서 법인분류정보 추출*/
    getCorporateClassInfo
}
