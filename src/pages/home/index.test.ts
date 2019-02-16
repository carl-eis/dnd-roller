import { getAllDiceRolls } from './helpers';
import { range } from 'lodash';

describe('number validator', () => {
  it('should at least get an 18 in 10000 rolls', () => {
    const setAmount = 10000;
    const rollSets = range(0, setAmount).map(getAllDiceRolls);
    const foundSet = rollSets.filter(item => item.includes(18)).length;
    const foundPercentage = (foundSet / setAmount * 100);
    expect(foundPercentage).toBeGreaterThan(2);
  });
});
