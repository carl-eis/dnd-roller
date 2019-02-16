import { range } from 'lodash';
import { getDiceRoll } from '~/pages/home/helpers';

const numSort = (a, b) => b - a;

export default () => {
  return range(0, 6).map((item) => {
    return getDiceRoll();
  }).sort(numSort);
};
