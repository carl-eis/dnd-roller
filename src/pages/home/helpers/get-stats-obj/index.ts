import { range } from 'lodash';
import { getRollObj } from '../';

export default (): number[][] => {
  return range(0, 6).map((item) => {
    return getRollObj();
  });
};
