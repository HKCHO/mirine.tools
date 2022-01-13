import saram from './saram';
import company from './company';
import hangeul from './hangeul';
import misc from './misc';

const mirine = {
  saram, // 사람관련 기능
  company, // 사업자 관련 기능
  hangeul, // 한글 관련 기능
  misc, // 정의되지 않은 기능
};

export default mirine;

export { saram };
export { company };
export { hangeul };
export { misc };
