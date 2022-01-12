/**
 * 법인 정보
 */
class Corporate {

    /** 법인종류 */
    static types = {
        /** 상법법인 */
        COMMERCIAL: {
            value: "commercial",
            label: "상법법인"
        },
        /** 민법법인 */
        CIVIL: {
            value: "civil",
            label: "민법법인"
        },
        /** 특수법인 */
        SPECIAL: {
            value: "special",
            label: "특수법인"
        },
        /** 외국법인 */
        FOREIGN: {
            value: "foreign",
            label: "외국법인"
        }
    }

    /** 법률근거 */
    static legalBasis = {
        /** 상법 */
        COMMERCIAL: {
            value: "commercial",
            label: "상법",
            types: Corporate.types.COMMERCIAL
        },
        /** 민법 */
        CIVIL: {
            value: "civil",
            label: "민법",
            types: Corporate.types.CIVIL
        },
        /** 사립학교법 */
        PRIVATE_SCHOOL: {
            value: "private_school",
            label: "사립학교법",
            types: Corporate.types.SPECIAL
        },
        /** 사회복지사법 */
        SOCIAL_WORKER: {
            value: "social_worker",
            label: "사회복지사법",
            types: Corporate.types.SPECIAL
        },
        /** 의료법 */
        MEDICAL: {
            value: "medical",
            label: "의료법",
            types: Corporate.types.SPECIAL
        },
        /** 공인회계사법 */
        CERTIFIED_ACCOUNTANT: {
            value: "certified_accountant",
            label: "공인회계사법",
            types: Corporate.types.SPECIAL
        },
        /** 한국은행법등 */
        BANK_OF_KOREA: {
            value: "bank_of_korea",
            label: "한국은행법등",
            types: Corporate.types.SPECIAL
        },
        /** 농업협동조합법 */
        ALPC_COOP: {
            value: "agricultural_cooperatives",
            label: "농업협동조합법",
            types: Corporate.types.SPECIAL
        },
        /** 축산업협동조합법 */
        LIVESTOCK_COOP: {
            value: "livestock_cooperatives",
            label: "축산업협동조합법",
            types: Corporate.types.SPECIAL
        },
        /** 수산업협동조합법 */
        FISHERIES_COOP: {
            value: "fisheries_cooperatives",
            label: "수산업협동조합법",
            types: Corporate.types.SPECIAL
        },
        /** 산림조합법 */
        FORESTRY_COOP: {
            value: "forestry_cooperatives",
            label: "산림조합법",
            types: Corporate.types.SPECIAL
        },
        /** 중소기업협동조합법 */
        SMALL_MEDIUM_ENTERPRISE_COOP: {
            value: "small_and_medium_enterprise_cooperatives",
            label: "중소기업협동조합법",
            types: Corporate.types.SPECIAL
        },
        /** 신용협동조합법 */
        CREDIT_UNIONS: {
            value: "credit_unions",
            label: "신용협동조합법",
            types: Corporate.types.SPECIAL
        },
        /** 농촌근대화촉진법 */
        ALPC_CMTY_MODERN_PROMO: {
            value: "agricultural_community_modernization_promotion",
            label: "농촌근대화촉진법",
            types: Corporate.types.SPECIAL
        },
        /** 노동조합법 */
        LABOR_UNION: {
            value: "labor_union",
            label: "노동조합법",
            types: Corporate.types.SPECIAL
        },
        /** 새마을금고법 */
        CMTY_CREDIT_COOP: {
            value: "community_credit_cooperatives",
            label: "새마을금고법",
            types: Corporate.types.SPECIAL
        },
        /** 의료보험조합법 */
        MEDICAL_INS_ASSOC: {
            value: "medical_insurance_association",
            label: "의료보험조합법",
            types: Corporate.types.SPECIAL
        },
        /** 변호사법 */
        ATTORNEYS: {
            value: "attorneys_at_law",
            label: "변호사법",
            types: Corporate.types.SPECIAL
        },
        /** 상공회의소법 */
        CHAMBERS_OF_COMM_N_IND: {
            value: "chambers_of_commerce_and_industry",
            label: "상공회의소법",
            types: Corporate.types.SPECIAL
        },
        /** 상호신용금고법 */
        MUTUAL_SAVINGS_N_FIN_CO: {
            value: "mutual_savings_and_finance_company",
            label: "상호신용금고법",
            types: Corporate.types.SPECIAL
        },
        /** 자동차운수사업법 */
        AUTO_TRANS_BIZ: {
            value: "automobile_transport_business",
            label: "자동차운수사업법",
            types: Corporate.types.SPECIAL
        },
        /** 공업협동조합법 */
        MANUFACTURING_IND_COOP: {
            value: "manufacturing_industry_cooperatives",
            label: "공업협동조합법",
            types: Corporate.types.SPECIAL
        }
    }

    /** 법인 분류 */
    static category = {
        /** 주식회사 */
        CORPORATION: {
            no: 11,
            value: "corporation",
            label: "주식회사",
            legalBasis: Corporate.legalBasis.COMMERCIAL
        },
        /** 합명회사 */
        UNLIMITED: {
            no: 12,
            value: "unlimited",
            label: "합명회사",
            legalBasis: Corporate.legalBasis.COMMERCIAL
        },
        /** 합자회사 */
        PARTNERSHIP: {
            no: 13,
            value: "partnership",
            label: "합자회사",
            legalBasis: Corporate.legalBasis.COMMERCIAL
        },
        /** 유한회사 */
        LIMITED: {
            no: 14,
            value: "limited",
            label: "유한회사",
            legalBasis: Corporate.legalBasis.COMMERCIAL
        },

        /** 사단법인 */
        INCORPORATED_ASSOCIATION: {
            no: 21,
            value: "incorporated_association",
            label: "사단법인",
            legalBasis: Corporate.legalBasis.CIVIL
        },
        /** 재단법인 */
        FOUNDATION: {
            no: 22,
            value: "foundation",
            label: "재단법인",
            legalBasis: Corporate.legalBasis.CIVIL
        },

        /** 학교법인 */
        EDUCATIONAL_FOUNDATION: {
            no: 31,
            value: "educational_foundation",
            label: "학교법인",
            legalBasis: Corporate.legalBasis.PRIVATE_SCHOOL
        },
        /** 사회복지법인  */
        SOCIAL_WELFARE: {
            no: 32,
            value: "social_welfare",
            label: "사회복지법인",
            legalBasis: Corporate.legalBasis.SOCIAL_WORKER
        },
        /** 의료법인 */
        MEDICAL: {
            no: 33,
            value: "medical",
            label: "의료법인",
            legalBasis: Corporate.legalBasis.MEDICAL
        },
        /** 회계법인 */
        ACCOUNTING_FIRM: {
            no: 34,
            value: "accounting_firm",
            label: "회계법인",
            legalBasis: Corporate.legalBasis.CERTIFIED_ACCOUNTANT
        },
        /** 특별법에 의한 은행 */
        SPECIAL_CASE_BANK: {
            no: 35,
            value: "special_case_bank",
            label: "특별법에 의한 은행",
            legalBasis: Corporate.legalBasis.BANK_OF_KOREA
        },
        /** 단위농업협동조합 */
        UNIT_ALPC_COOP: {
            no: 36,
            value: "unit_alpc_coop",
            label: "단위농업협동조합",
            legalBasis: Corporate.legalBasis.ALPC_COOP
        },
        /** 특수농업협동조합(양잠협동조합) */
        SPECIAL_ALPC_COOP: {
            no: 36,
            value: "unit_alpc_coop",
            label: "특수농업협동조합(양잠협동조합)",
            legalBasis: Corporate.legalBasis.ALPC_COOP
        },
        /** 농업협동조합중앙회 36 */
        /** 지역별축산업협동조합 37 */
        /** 업종별축산업협동조합 37 */
        /** 축산업협동조합중앙회 37 */
        /** 지역별수산업협동조합 38 */
        /** 업종별수산업협동조합 38 */
        /** 수산물제조업협동조합 38 */
        /** 수산업협동조합중앙회 38 */
        /** 어업협동조합 38 */
        /** 어촌계 38 */
        /** 산림조합중앙회 39 */
        /** 산림조합 39 */
        /** 산림계 39 */

        /** 지역별중소기업협동조합 40 */
        /** 업종별중소기업협동조합 40 */
        /** 중소기업협동조합 40 */
        /** 중소기업협동조합연합회(업종별) 40 */
        /** 중소기업협동조합중앙회 40 */

        /** 신용협동조합 41 */
        /** 신용협동조합연합회 41 */

        /** 농지개량조합 42 */
        /** 농지개량조합연합회 42 */
        /** 농업진흥공사 42 */

        /** 노동조합 43 */

        /** 새마을금고(마을금고) 44 */
        /** 새마을금고연합회 44 */

        /** 의료보험조합 45 */

        /** 법무법인 46 */

        /** 상공회의소 47 */

        /** 상호신용금고 48 */
        /** 상호신용금고연합회 48 */
        /** 상호신용보증기금 48 */

        /** 자동차운송사업조합 49 */
        /** 자동차운송사업연합회 49 */

        /** 단위공업협동조합 50 */
        /** 특수공업협동조합 50 */
        /** 공업협동조합중앙회 50 */

        /** 분류할 수 없는 법인 71 */

        /** 외국 주식회사 81 */
        /** 외국 합명회사 82 */
        /** 외국 합자회사 83 */
        /** 외국 유한회사 84 */
        /** 외국 기타 85 */
    }
}

export default Corporate;

