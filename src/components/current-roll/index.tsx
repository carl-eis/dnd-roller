import React, { Component } from 'react';
import {
  StatsBlock,
  StatsRow
} from './styles';
import { calculatePointValue } from './helpers';

const getName = (key: string) => {
  const parsedKey = parseInt(key, 10);
  if (!!parsedKey || parsedKey === 0) return `Stat ${(parsedKey + 1).toString()}`;
  return key;
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

  renderBlock(name: string, stat: string, key: any) {
    return (
      <StatsBlock key={key}>
        <div className="heading">
          {name}
        </div>
        <div className="primary">
          {stat}
        </div>
        <div className="secondary">
          {calculatePointValue(stat)}
        </div>
      </StatsBlock>
    );
  }

  render() {
    const { currentRolls } = this.props;
    if (!currentRolls) return null;
    return (
      <StatsRow>
        {Object.keys(currentRolls).map((key, index) => {
          const name: string = getName(key);
          return this.renderBlock(name, currentRolls[key], index);
        })}
      </StatsRow>
    );
  }
}
