import { range } from 'lodash';

const rollDice = (sides: number = 6) => {
  return Math.floor(Math.random() * sides) + 1;
};

export default (diceAmount: number = 3): number[] => {
  return range(0, diceAmount)
    .map(() => {
      return rollDice();
    });
};
