import React, { Component } from 'react';
import { ButtonsContainer, PageContainer, PageInnerContent, PageWrapper, Row } from './styles';
import Button from '@material-ui/core/Button';
import Table from '~/components/table';
import { range } from 'lodash';
import { getAllDiceRolls, getStatsObj } from '~/pages/home/helpers';
import AdvancedTable from '~/components/advanced-table';
import { round } from 'mathjs';

interface IProps {
  [x: string]: any;
}

interface IState {
  rolls: number[][][];
}

export default class HomePage extends Component<IProps, IState> {
  state = {
    rolls: [],
  };

  constructor(props) {
    super(props);

    this.rollDice = this.rollDice.bind(this);
    this.clearRolls = this.clearRolls.bind(this);
    this.rollMultipleDice = this.rollMultipleDice.bind(this);
  }

  rollDice() {
    const fullRoll = getStatsObj();
    this.setState((prevState) => {
      return {
        rolls: [
          ...prevState.rolls,
          fullRoll,
        ],
      };
    });
  }

  rollMultipleDice(rollAmount: number = 100) {
    return () => {
      const rolls = range(0, rollAmount).map(getStatsObj);
      this.setState((prevState) => {
        return {
          rolls: [
            ...prevState.rolls,
            ...rolls,
          ],
        };
      });
    };
  }

  clearRolls() {
    this.setState({ rolls: [] });
  }

  getDisplayRolls() {
    return this.state.rolls.map((statRow: number[][]) => {
      const computedStatBlock: number[] = statRow.reduce((acc, rowRolls, index) => {
        return [
          ...acc,
          rowRolls.reduce((a, b) => a + b),
        ];
      }, []).sort((a, b) => b - a);
      const average = round(computedStatBlock.reduce((total, current) => total + current) / 6, 2);
      return {
        ...computedStatBlock,
        average,
      };
    });
  }

  render() {
    const defaultColumnSettings = {
      sortable: true,
      resizable: true,
      filter: true,
    };
    const displayRolls = this.getDisplayRolls();
    const statColumns = range(0, 6).map(item => ({
      headerName: `Stat ${item + 1}`,
      field: item.toString(),
      ...defaultColumnSettings,
    }));
    const otherColumns = [{
      headerName: 'Average',
      field: 'average',
      ...defaultColumnSettings,
    }];
    const columns = [
      ...statColumns,
      ...otherColumns,
    ];

    console.log({
      columns,
      displayRolls,
    });
    return (
      <PageContainer>
        <PageWrapper>
          <PageInnerContent>
            <Row>
              <h1>Really fair dice roller</h1>
            </Row>
            <Row>
              <ButtonsContainer>
                <Button variant="contained" color="primary" onClick={this.rollDice}>
                  ROLL!
                </Button>
                <Button variant="contained" color="primary" onClick={this.rollMultipleDice()}>
                  ROLL 100!
                </Button>
                <Button variant="contained" color="primary" onClick={this.clearRolls}>
                  CLEAR!
                </Button>
              </ButtonsContainer>
            </Row>
            <Row>
              <AdvancedTable
                columns={columns}
                rowData={displayRolls}
              />
            </Row>
          </PageInnerContent>
        </PageWrapper>
      </PageContainer>
    );
  }
}
