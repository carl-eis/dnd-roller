export interface IDiceRuleset {
  name: string;
  dice: number;
  discardDice: number;
  discardSets: number;
  sets: number;
}

export interface IRulesets {
  [x: string]: IDiceRuleset;
}

export const RULESETS: IRulesets = {
  ROLL_3: {
    name: 'Roll 3',
    dice: 3,
    sets: 6,
    discardDice: 0,
    discardSets: 0,
  },
  ROLL_3_DISCARD_SET: {
    name: 'Roll 7x3, discard lowest set',
    dice: 3,
    sets: 7,
    discardDice: 0,
    discardSets: 1,
  },
  ROLL_4_DISCARD_1: {
    name: 'Roll 6x4, discard lowest dice',
    dice: 4,
    sets: 6,
    discardDice: 1,
    discardSets: 0,
  },
};

export const UTILITIES = {
  numericSort: (a, b) => (b - a),
  addNumbers: (acc: number, item: number) => (acc + item),
};
