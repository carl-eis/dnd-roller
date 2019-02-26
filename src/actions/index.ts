export const SWITCH_RULE = 'SWITCH_RULE';
export const ROLL_STATS = 'ROLL_STATS';
export const SELECT_STAT_BLOCK = 'SELECT_STAT_BLOCK';
export const CLEAR_ALL_ROLLS = 'CLEAR_ALL_ROLLS';

export const switchRule = (ruleName: string) => ({
  type: SWITCH_RULE, data: ruleName,
});

export const rollStats = (amount: number = 1) => ({
  type: ROLL_STATS, data: amount,
});

export const selectStatBlock = (id: string) => ({
  type: SELECT_STAT_BLOCK, data: id,
});

export const clearAllRolls = () => ({
  type: CLEAR_ALL_ROLLS,
});
