import React, { Component } from 'react';
import {} from './styles';

interface IProps {
  totalRolls: number;
  totalStatRolls: number;
  averageSingleRoll: number;
}

interface IState {
  [x: string]: any;
}

export default class ComponentName extends Component<IProps, IState> {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      totalRolls,
      totalStatRolls,
      averageSingleRoll,
    } = this.props;

    return (
      <div>
        <h3>Total Stat Rolls: {totalStatRolls}</h3>
        <h3>Total Dice Rolls: {totalRolls}</h3>
        <h3>Average Single Roll: {averageSingleRoll.toFixed(2)}</h3>
      </div>
    );
  }
}
