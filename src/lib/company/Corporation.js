import isCorporateRegistrationNo from "./isCorporateRegistrationNo";

/**
 * 법인
 *
 * @since 1.0.0
 *
 * @author hkcho
 */
class Corporation {
  /** 법인번호 */
  registrationNo = null;

  constructor(corporationData) {
    if (typeof corporationData === "object") {
      // 법인 등록번호
      if (corporationData.registrationNo)
        this.registrationNo = corporationData.registrationNo;
    }
  }

  /**
   * 법인번호 유효성검사
   * @return {boolean} 법인번호 유효성
   */
  isValidCorpRegistrationNo() {
    return isCorporateRegistrationNo(this.registrationNo);
  }

  /**
   * 법인종류 조회
   */
  getType() {
    if (!this.isValidCorpRegistrationNo()) return null;

    // 법인종류별 분류번호 추출
    const categoryNo = extractCategoryNo(this.registrationNo);

    // 법인종류
    let type = null;

    // 분류번호로 법인종류 찾기
    for (const categoryNm of Object.keys(Corporation.category)) {
      const category = Corporation.category[categoryNm];
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
  getLegalBasis() {
    if (!this.isValidCorpRegistrationNo()) return null;

    // 법인종류별 분류번호 추출
    const categoryNo = extractCategoryNo(this.registrationNo);

    // 법률근거
    let legalBasis = null;

    // 분류번호로 법률근거 찾기
    for (const categoryNm of Object.keys(Corporation.category)) {
      const category = Corporation.category[categoryNm];
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
  static types = {
    /** 상법법인 */
    COMMERCIAL: {
      value: "commercial",
      label: "상법법인",
    },
    /** 민법법인 */
    CIVIL: {
      value: "civil",
      label: "민법법인",
    },
    /** 특수법인 */
    SPECIAL: {
      value: "special",
      label: "특수법인",
    },
    /** 외국법인 */
    FOREIGN: {
      value: "foreign",
      label: "외국법인",
    },
    /** 기타법인 */
    ETC: {
      value: "etc",
      label: "기타",
    },
  };

  /**
   * 법률근거
   *
   * @readonly
   * @constant
   */
  static legalBasis = {
    /** 상법 */
    COMMERCIAL: {
      value: "commercial",
      label: "상법",
      type: Corporation.types.COMMERCIAL,
    },
    /** 민법 */
    CIVIL: {
      value: "civil",
      label: "민법",
      type: Corporation.types.CIVIL,
    },
    /** 사립학교법 */
    PRIVATE_SCHOOL: {
      value: "private_school",
      label: "사립학교법",
      type: Corporation.types.SPECIAL,
    },
    /** 사회복지사법 */
    SOCIAL_WORKER: {
      value: "social_worker",
      label: "사회복지사법",
      type: Corporation.types.SPECIAL,
    },
    /** 의료법 */
    MEDICAL: {
      value: "medical",
      label: "의료법",
      type: Corporation.types.SPECIAL,
    },
    /** 공인회계사법 */
    CERTIFIED_ACCOUNTANT: {
      value: "certified_accountant",
      label: "공인회계사법",
      type: Corporation.types.SPECIAL,
    },
    /** 한국은행법등 */
    BANK_OF_KOREA: {
      value: "bank_of_korea",
      label: "한국은행법등",
      type: Corporation.types.SPECIAL,
    },
    /** 농업협동조합법 */
    ALPC_COOP: {
      value: "agricultural_cooperatives",
      label: "농업협동조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 축산업협동조합법 */
    LIVESTOCK_COOP: {
      value: "livestock_cooperatives",
      label: "축산업협동조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 수산업협동조합법 */
    FISHERIES_COOP: {
      value: "fisheries_cooperatives",
      label: "수산업협동조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 산림조합법 */
    FORESTRY_COOP: {
      value: "forestry_cooperatives",
      label: "산림조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 중소기업협동조합법 */
    SMALL_MEDIUM_ENTERPRISE_COOP: {
      value: "small_and_medium_enterprise_cooperatives",
      label: "중소기업협동조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 신용협동조합법 */
    CREDIT_COOP: {
      value: "credit_cooperatives",
      label: "신용협동조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 농촌근대화촉진법 */
    ALPC_CMTY_MODERN_PROMO: {
      value: "agricultural_community_modernization_promotion",
      label: "농촌근대화촉진법",
      type: Corporation.types.SPECIAL,
    },
    /** 노동조합법 */
    LABOR_UNION: {
      value: "labor_union",
      label: "노동조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 새마을금고법 */
    CMTY_CREDIT_COOP: {
      value: "community_credit_cooperatives",
      label: "새마을금고법",
      type: Corporation.types.SPECIAL,
    },
    /** 의료보험조합법 */
    MEDICAL_INS_ASSOC: {
      value: "medical_insurance_association",
      label: "의료보험조합법",
      type: Corporation.types.SPECIAL,
    },
    /** 변호사법 */
    ATTORNEYS: {
      value: "attorneys_at_law",
      label: "변호사법",
      type: Corporation.types.SPECIAL,
    },
    /** 상공회의소법 */
    CHAMBERS_OF_COMM_N_IND: {
      value: "chambers_of_commerce_and_industry",
      label: "상공회의소법",
      type: Corporation.types.SPECIAL,
    },
    /** 상호신용금고법 */
    MUTUAL_SAVINGS_N_FIN_CO: {
      value: "mutual_savings_and_finance_company",
      label: "상호신용금고법",
      type: Corporation.types.SPECIAL,
    },
    /** 자동차운수사업법 */
    AUTO_TRANS_BIZ: {
      value: "automobile_transport_business",
      label: "자동차운수사업법",
      type: Corporation.types.SPECIAL,
    },
    /** 공업협동조합법 */
    MANUFACTURING_IND_COOP: {
      value: "manufacturing_industry_cooperatives",
      label: "공업협동조합법",
      type: Corporation.types.SPECIAL,
    },
  };

  /**
   * 법인 분류
   *
   * @readonly
   * @constant
   */
  static category = {
    /**
     * 주식회사
     */
    CORPORATION: {
      no: 11,
      value: "corporation",
      label: "주식회사",
      type: Corporation.types.COMMERCIAL,
      legalBasis: Corporation.legalBasis.COMMERCIAL,
    },
    /** 합명회사 */
    UNLIMITED: {
      no: 12,
      value: "unlimited",
      label: "합명회사",
      type: Corporation.types.COMMERCIAL,
      legalBasis: Corporation.legalBasis.COMMERCIAL,
    },
    /** 합자회사 */
    PARTNERSHIP: {
      no: 13,
      value: "partnership",
      label: "합자회사",
      type: Corporation.types.COMMERCIAL,
      legalBasis: Corporation.legalBasis.COMMERCIAL,
    },
    /** 유한회사 */
    LIMITED: {
      no: 14,
      value: "limited",
      label: "유한회사",
      type: Corporation.types.COMMERCIAL,
      legalBasis: Corporation.legalBasis.COMMERCIAL,
    },

    /** 사단법인 */
    INCORPORATED_ASSOCIATION: {
      no: 21,
      value: "incorporated_association",
      label: "사단법인",
      legalBasis: Corporation.legalBasis.CIVIL,
    },
    /** 재단법인 */
    FOUNDATION: {
      no: 22,
      value: "foundation",
      label: "재단법인",
      type: Corporation.types.CIVIL,
      legalBasis: Corporation.legalBasis.CIVIL,
    },

    /** 학교법인 */
    EDUCATIONAL_FOUNDATION: {
      no: 31,
      value: "educational_foundation",
      label: "학교법인",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.PRIVATE_SCHOOL,
    },
    /** 사회복지법인  */
    SOCIAL_WELFARE: {
      no: 32,
      value: "social_welfare",
      label: "사회복지법인",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.SOCIAL_WORKER,
    },
    /** 의료법인 */
    MEDICAL: {
      no: 33,
      value: "medical",
      label: "의료법인",
      legalBasis: Corporation.legalBasis.MEDICAL,
    },
    /** 회계법인 */
    ACCOUNTING_FIRM: {
      no: 34,
      value: "accounting_firm",
      label: "회계법인",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.CERTIFIED_ACCOUNTANT,
    },
    /** 특별법에 의한 은행 */
    SPECIAL_CASE_BANK: {
      no: 35,
      value: "special_case_bank",
      label: "특별법에 의한 은행",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.BANK_OF_KOREA,
    },
    /** 단위농업협동조합 */
    UNIT_ALPC_COOP: {
      no: 36,
      value: "unit_agricultural_cooperatives",
      label: "단위농업협동조합",
      legalBasis: Corporation.legalBasis.ALPC_COOP,
    },
    /** 특수농업협동조합(양잠협동조합) */
    SPECIAL_ALPC_COOP: {
      no: 36,
      value: "unit_agricultural_cooperatives",
      label: "특수농업협동조합(양잠협동조합)",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.ALPC_COOP,
    },
    /** 농업협동조합중앙회 */
    ALPC_COOP_CENTER: {
      no: 36,
      value: "agricultural_cooperatives_center",
      label: "농업협동조합중앙회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.ALPC_COOP,
    },

    /** 지역별축산업협동조합 */
    PROVINCE_LIVESTOCK_COOP: {
      no: 37,
      value: "province_livestock_cooperatives",
      label: "지역별축산업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.LIVESTOCK_COOP,
    },
    /** 업종별축산업협동조합 */
    LIVESTOCK_COOP_BY_BIZ: {
      no: 37,
      value: "livestock_cooperatives_by_business",
      label: "업종별축산업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.LIVESTOCK_COOP,
    },
    /** 축산업협동조합중앙회 */
    LIVESTOCK_COOP_CENTER: {
      no: 37,
      value: "livestock_cooperatives_center",
      label: "축산업협동조합중앙회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.LIVESTOCK_COOP,
    },

    /** 지역별수산업협동조합 */
    PROVINCE_FISHERIES_COOP: {
      no: 38,
      value: "province_fisheries_cooperatives",
      label: "지역별수산업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FISHERIES_COOP,
    },
    /** 업종별수산업협동조합 */
    FISHERIES_COOP_BY_BIZ: {
      no: 38,
      value: "fisheries_cooperatives_by_biz",
      label: "업종별수산업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FISHERIES_COOP,
    },
    /** 수산물제조업협동조합 */
    FISHERIES_MANUFACTURAL_COOP: {
      no: 38,
      value: "fisheries_manufactural_cooperatives",
      label: "수산물제조업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FISHERIES_COOP,
    },
    /** 수산업협동조합중앙회 */
    FISHERIES_COOP_CENTER: {
      no: 38,
      value: "fisheries_cooperatives_center",
      label: "수산업협동조합중앙회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FISHERIES_COOP,
    },
    /** 어업협동조합 */
    FISHERIES_IND_COOP: {
      no: 38,
      value: "fisheries_industry_cooperatives",
      label: "어업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FISHERIES_COOP,
    },
    /** 어촌계 */
    FISHING_VIL_FRTRNT: {
      no: 38,
      value: "fishing_village_fraternities",
      label: "어촌계",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FISHERIES_COOP,
    },

    /** 산림조합중앙회 */
    FORESTRY_COOP_CENTER: {
      no: 39,
      value: "forestry_cooperatives_center",
      label: "산림조합중앙회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FORESTRY_COOP,
    },
    /** 산림조합 */
    FORESTRY_COOP: {
      no: 39,
      value: "forestry_cooperatives",
      label: "산림조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FORESTRY_COOP,
    },
    /** 산림계 */
    FOREST_VIL_FRTRNT: {
      no: 39,
      value: "forest_village_fraternities",
      label: "산림계",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.FORESTRY_COOP,
    },

    /** 지역별중소기업협동조합 */
    PROVINCE_SMALL_MEDIUM_ENTERPRISE_COOP: {
      no: 40,
      value: "province_small_and_medium_enterprise_cooperatives",
      label: "지역별중소기업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP,
    },
    /** 업종별중소기업협동조합 */
    SMALL_MEDIUM_ENTERPRISE_COOP_BY_BIZ: {
      no: 40,
      value: "small_and_medium_enterprise_cooperatives_by_business",
      label: "업종별중소기업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP,
    },
    /** 중소기업협동조합 */
    SMALL_MEDIUM_ENTERPRISE_COOP: {
      no: 40,
      value: "small_and_medium_enterprise_cooperatives",
      label: "중소기업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP,
    },
    /** 중소기업협동조합연합회(업종별) */
    SMALL_MEDIUM_ENTERPRISE_COOP_UNION_BY_BIZ: {
      no: 40,
      value: "small_and_medium_enterprise_cooperatives_union_by_business",
      label: "중소기업협동조합연합회(업종별)",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP,
    },
    /** 중소기업협동조합중앙회 */
    SMALL_MEDIUM_ENTERPRISE_COOP_CENTER: {
      no: 40,
      value: "small_and_medium_enterprise_cooperatives_center",
      label: "중소기업협동조합중앙회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.SMALL_MEDIUM_ENTERPRISE_COOP,
    },

    /** 신용협동조합 */
    CREDIT_COOP: {
      no: 41,
      value: "credit_cooperatives",
      label: "신용협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.CREDIT_COOP,
    },
    /** 신용협동조합연합회 */
    CREDIT_COOP_UNION: {
      no: 41,
      value: "credit_cooperatives_union",
      label: "신용협동조합연합회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.CREDIT_COOP,
    },

    /** 농지개량조합 */
    FARMLAND_IMPRV_COOP: {
      no: 42,
      value: "farmland_improvement_cooperatives",
      label: "농지개량조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.ALPC_CMTY_MODERN_PROMO,
    },
    /** 농지개량조합연합회 */
    FARMLAND_IMPRV_COOP_UNION: {
      no: 42,
      value: "farmland_improvement_cooperatives_union",
      label: "농지개량조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.ALPC_CMTY_MODERN_PROMO,
    },
    /** 농업진흥공사 */
    AGRICULTURAL_DEV_CORP: {
      no: 42,
      value: "agricultural_development_corporation",
      label: "농업진흥공사",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.ALPC_CMTY_MODERN_PROMO,
    },

    /** 노동조합 */
    LABOR_UNION: {
      no: 43,
      value: "labor_union",
      label: "노동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.LABOR_UNION,
    },

    /** 새마을금고(마을금고) */
    CMTY_CREDIT_COOP: {
      no: 44,
      value: "community_credit_cooperatives",
      label: "새마을금고(마을금고)",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.CMTY_CREDIT_COOP,
    },
    /** 새마을금고연합회 */
    CMTY_CREDIT_COOP_UNION: {
      no: 44,
      value: "community_credit_cooperatives_union",
      label: "새마을금고(마을금고)",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.CMTY_CREDIT_COOP,
    },

    /** 의료보험조합 */
    MEDICAL_INS_ASSOC: {
      no: 45,
      value: "medical_insurance_association",
      label: "의료보험조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MEDICAL_INS_ASSOC,
    },

    /** 법무법인 */
    LAW_FIRM: {
      no: 46,
      value: "law_firm",
      label: "법무법인",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.ATTORNEYS,
    },

    /** 상공회의소 */
    CHAMBERS_OF_COMM_N_IND: {
      no: 47,
      value: "chambers_of_commerce_and_industry",
      label: "상공회의소",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.CHAMBERS_OF_COMM_N_IND,
    },

    /** 상호신용금고 */
    MUTUAL_SAVINGS_N_FIN_CO: {
      no: 48,
      value: "mutual_savings_and_finance_company",
      label: "상호신용금고",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MUTUAL_SAVINGS_N_FIN_CO,
    },
    /** 상호신용금고연합회 */
    MUTUAL_SAVINGS_N_FIN_CO_UNION: {
      no: 48,
      value: "mutual_savings_and_finance_company_union",
      label: "상호신용금고연합회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MUTUAL_SAVINGS_N_FIN_CO,
    },
    /** 상호신용보증기금 */
    MUTUAL_CREDIT_GUARANTEE_FUND: {
      no: 48,
      value: "mutual_credit_guarantee_fund",
      label: "상호신용보증기금",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MUTUAL_SAVINGS_N_FIN_CO,
    },

    /** 자동차운송사업조합 */
    AUTOMOBILE_TRANSPORT_BIZ_ASSOC: {
      no: 49,
      value: "automobile_transport_business_association",
      label: "자동차운송사업조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.AUTO_TRANS_BIZ,
    },
    /** 자동차운송사업연합회 */
    AUTOMOBILE_TRANSPORT_BIZ_UNION: {
      no: 49,
      value: "automobile_transport_business_union",
      label: "자동차운송사업연합회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.AUTO_TRANS_BIZ,
    },

    /** 단위공업협동조합 */
    UNIT_IND_COOP: {
      no: 50,
      value: "unit_industry_cooperatives",
      label: "단위공업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MANUFACTURING_IND_COOP,
    },
    /** 특수공업협동조합 */
    SPECIAL_IND_COOP: {
      no: 50,
      value: "special_industry_cooperatives",
      label: "특수공업협동조합",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MANUFACTURING_IND_COOP,
    },
    /** 공업협동조합중앙회 */
    IND_COOP_CENTER: {
      no: 50,
      value: "industry_cooperatives_center",
      label: "공업협동조합중앙회",
      type: Corporation.types.SPECIAL,
      legalBasis: Corporation.legalBasis.MANUFACTURING_IND_COOP,
    },

    /** 분류할 수 없는 법인 */
    UNCATEGORIZED_CORPORATION: {
      no: 71,
      value: "uncategorized_corporation",
      label: "분류할 수 없는 법인",
      type: Corporation.types.ETC,
      legalBasis: null,
    },

    /** 외국 주식회사 */
    FOREIGN_CORPORATION: {
      no: 81,
      value: "foreign_corporation",
      label: "주식회사",
      type: Corporation.types.FOREIGN,
      legalBasis: null,
    },
    /** 외국 합명회사 */
    FOREIGN_UNLIMITED: {
      no: 82,
      value: "foreign_unlimited",
      label: "합명회사",
      type: Corporation.types.FOREIGN,
      legalBasis: null,
    },
    /** 외국 합자회사 */
    FOREIGN_PARTNERSHIP: {
      no: 83,
      value: "foreign_partnership",
      label: "합자회사",
      type: Corporation.types.FOREIGN,
      legalBasis: null,
    },
    /** 외국 유한회사 */
    FOREIGN_LIMITED: {
      no: 84,
      value: "foreign_limited",
      label: "유한회사",
      type: Corporation.types.FOREIGN,
      legalBasis: null,
    },
    /** 외국 기타 */
    FOREIGN_OTHER: {
      no: 85,
      value: "foreign_other",
      label: "기타",
      type: Corporation.types.FOREIGN,
      legalBasis: null,
    },
  };
}

/**
 * 법인종류별 분류번호 추출
 *
 * @private
 * @function
 * @param registrationNo    법인번호
 * @return {string}         법인종류별 분류번호
 */
function extractCategoryNo(registrationNo) {
  return registrationNo.substr(4, 2) >> 0;
}

export default Corporation;
