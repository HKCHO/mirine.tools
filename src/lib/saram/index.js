


class Saram {
    constructor() {
        console.log("사람 관련 도구.")
    }

    /**
     * 주민|외국인 번호 유효성 검사
     * @param rn 주민|외국인 번호
     * @returns {boolean} 유효성
     */
    isRegistrationNum = (rn) => {
        if( !rn ) return false;
        console.log("rn: ", rn);

        return true;
    }
}

export default Saram;
