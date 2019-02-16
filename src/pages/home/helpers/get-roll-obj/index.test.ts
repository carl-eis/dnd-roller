import diceRoller from './';
import { range } from 'lodash';

describe('dice roller', () => {
  it('should never roll zero', () => {
    const rollAmount = 10000;
    const results = range(0, rollAmount).map(item => diceRoller());
    const badResults = results.find(item => item.includes(0));
    expect(badResults).toEqual(undefined);
  });

  it('should never add up to two', () => {
    const rollAmount = 10000;
    const results = range(0, rollAmount).map(item => diceRoller());
    const badResults = results.find(item => item.reduce((a, b) => a + b) < 3);
    expect(badResults).toEqual(undefined);
  });
});

