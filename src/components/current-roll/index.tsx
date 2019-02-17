import React, { Component } from 'react';
import {
  StatsBlock,
  StatsRow
} from './styles';

const getName = (key: string) => {
  const parsedKey = parseInt(key, 10);
  if (!!parsedKey || parsedKey === 0) return `Stat ${(parsedKey + 1).toString()}`;
  return key;
};

const calcValue = (oldVal: string): string => {
  const parsedVal = parseInt(oldVal, 10);
  const calVal = (parsedVal - 10) / 2;
  const splitVal = calVal.toString().split('.');

  if (splitVal.length) {
    const parsedInitial = parseInt(splitVal[0], 10);
    return (parsedInitial < 0 ? (parsedInitial - 1).toString() : parsedInitial.toString());
  }

  return calVal.toString();
};

interface IProps {
  currentRolls: number[];
}

interface IState {
  [x: string]: any;
}

export default class CurrentRoll extends Component<IProps, IState> {
  state = {};

  constructor(props) {
    super(props);
  }

  renderBlock(name: string, stat: string) {
    return (
      <StatsBlock>
        <div className="heading">
          {name}
        </div>
        <div className="primary">
          {stat}
        </div>
        <div className="secondary">
          {calcValue(stat)}
        </div>
      </StatsBlock>
    );
  }

  render() {
    const { currentRolls } = this.props;
    console.log(currentRolls);
    if (!currentRolls) return null;
    return (
      <StatsRow>
        {Object.keys(currentRolls).map((key) => {
          const name: string = getName(key);
          return this.renderBlock(name, currentRolls[key]);
        })}
      </StatsRow>
    );
  }
}
