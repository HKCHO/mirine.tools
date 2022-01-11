import {saram} from "../saram";

test('주민/외국인 등록번호 기능검사', () => {
    const testRn = "990101-5020063";
    saram.isRegistrationNo(testRn)
    saram.isJuminRegistrationNo(testRn)
    saram.isForeignRegistrationNo(testRn)
});

test('사람 이름관련 기능검사', () => {
    saram.validateKoreanName("조현권")
})
