import { generate } from 'shortid';
import { range } from 'lodash';
import { IRulesets, RULESETS } from '~/core/constants';
import { ROLL_STATS, CLEAR_ALL_ROLLS, SWITCH_RULE } from '~/actions';
import { rollStatBlock } from '~/helpers';

export interface IStatRolls {
  [x: string]: number[];
}

export interface IDiceReducerState {
  statRolls: IStatRolls;
  ruleSets: IRulesets;
  selectedRule: string;
}

const initialState: IDiceReducerState = {
  statRolls: {},
  ruleSets: RULESETS,
  selectedRule: Object.keys(RULESETS)[0],
};

export default function (state: IDiceReducerState = initialState, action): IDiceReducerState {
  const { type, data } = action;
  switch (type) {
    case ROLL_STATS: {
      const rollAmount: number = data;
      const { selectedRule, ruleSets } = state;

      const statRolls = range(0, rollAmount)
        .reduce((acc) => {
          const statBlock = rollStatBlock(ruleSets[selectedRule], selectedRule);
          const id = generate();
          return {
            ...acc,
            [id]: statBlock,
          };
        }, {});

      return {
        ...state,
        statRolls: {
          ...state.statRolls,
          ...statRolls,
        },
      };
    }

    case SWITCH_RULE: {
      return {
        ...state,
        selectedRule: data,
      };
    }

    case CLEAR_ALL_ROLLS: {
      return {
        ...state,
        statRolls: {},
      };
    }

    default:
      return state;
  }
}
