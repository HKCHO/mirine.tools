import Saram from "../saram";

test('주민/외국인 등록번호 기능검사', () => {
    const testRn = "990101-5020063";
    Saram.isRegistrationNo(testRn)
    Saram.isJuminRegistrationNo(testRn)
    Saram.isForeignRegistrationNo(testRn)
});
