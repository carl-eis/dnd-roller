import { range } from 'lodash';

export default (): number => {
  return range(0, 3)
    .reduce((total, item) => {
      const dice: number = Math.floor(Math.random() * 6) + 1;
      return total + dice;
    }, 0);
};
