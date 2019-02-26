import { connect } from 'react-redux';
import { IApplicationState } from '~/core/reducer';
import { clearAllRolls, rollStats, switchRule } from '~/actions';
import HomePage from './component';

export const mapStateToProps = (state: IApplicationState) => {
  const {
    diceReducer: {
      statRolls,
      selectedRule,
      ruleSets,
    },
  } = state;
  return {
    statRolls,
    selectedRuleset: ruleSets[selectedRule],
    selectedRulesetId: selectedRule,
  };
};

export const mapDispatchToProps = dispatch => ({
  clearAllRolls() {
    dispatch(clearAllRolls());
  },
  rollStats(amount: number) {
    dispatch(rollStats(amount));
  },
  switchRule(rule: string) {
    dispatch(switchRule(rule));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
