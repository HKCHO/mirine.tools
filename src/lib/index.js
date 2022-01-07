import Saram from "./saram";

class Mirine {
  constructor() {
    console.log("라이브러리 생성자 로드됨.");
  }

  saram = new Saram();

  testMethod = () => {
    console.log("테스트");
  };
}

export default Mirine;
