import { range } from 'lodash';
import { IDiceRuleset, UTILITIES } from '~/core/constants';

import { rollDice } from '../';

const { numericSort, addNumbers } = UTILITIES;

const dropLowest = (amount, arr): number[] => {
  const sorted = arr.sort(numericSort);
  return sorted.slice(0, sorted.length - amount);
};

const rollSingleStat = (diceAmount: number, dropAmount: number): number => {
  const rolls: number[] = range(0, diceAmount).map(rollDice);

  if (!dropAmount) return rolls.reduce(addNumbers);

  return dropLowest(dropAmount, rolls)
    .reduce(addNumbers);
};

export default (
  selectedRuleset: IDiceRuleset,
  selectedRulesetId?: string): number[] => {
  const {
    dice,
    discardDice,
    discardSets,
    sets,
  } = selectedRuleset;

  const rolledSet = range(0, sets).map(item => rollSingleStat(dice, discardDice));
  if (!discardSets) return rolledSet;
  return dropLowest(discardSets, rolledSet);
};
