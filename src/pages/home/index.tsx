import React, { Component } from 'react';
import { ButtonsContainer, PageContainer, PageInnerContent, PageWrapper, Row, TablePositioner } from './styles';
import Button from '@material-ui/core/Button';
import { range } from 'lodash';
import { getStatsObj, StatsCalculator } from '~/pages/home/helpers';
import AdvancedTable from '~/components/advanced-table';
import { round } from 'mathjs';
import { CurrentRoll, SelectField, StatsDisplay } from '~/components';

interface IProps {
  [x: string]: any;
}

interface IRuleOption {
  value: string;
  key: string;
}

interface IState {
  rolls: number[][][];
  ruleOptions: IRuleOption[];
  selectedRule: string;
}

export default class HomePage extends Component<IProps, IState> {
  state = {
    rolls: [],
    ruleOptions: [{
      value: 'Roll 3',
      key: 'roll_3',
    }, {
      value: 'Roll 4, drop lowest',
      key: 'roll_4',
    }],
    selectedRule: 'roll_3',
  };

  constructor(props) {
    super(props);

    this.rollDice = this.rollDice.bind(this);
    this.clearRolls = this.clearRolls.bind(this);
    this.rollMultipleDice = this.rollMultipleDice.bind(this);
    this.setSelectedRule = this.setSelectedRule.bind(this);
  }

  setSelectedRule(value: string) {
    this.setState({
      selectedRule: value,
    });
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

  getStats() {
    const {
      averageRoll,
      totalStatRolls,
      totalRolls,
    } = new StatsCalculator(this.state.rolls);

    return {
      TOTAL_STAT_ROLLS: totalStatRolls,
      TOTAL_DICE_ROLLED: totalRolls,
      AVERAGE_SINGLE_ROLL: averageRoll,
    };
  }

  getColumns() {
    const defaultColumnSettings = {
      sortable: true,
      resizable: true,
      filter: true,
      lockPosition: true,
    };
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
    return [
      ...statColumns,
      ...otherColumns,
    ];
  }

  render() {
    const displayRolls = this.getDisplayRolls();
    const columns = this.getColumns();
    const {
      TOTAL_STAT_ROLLS,
      TOTAL_DICE_ROLLED,
      AVERAGE_SINGLE_ROLL,
    } = this.getStats();
    const { selectedRule, ruleOptions } = this.state;

    return (
      <PageContainer>
        <PageWrapper>
          <PageInnerContent>
            <Row>
            </Row>
            <Row even>
              <div>
                <h1>Really fair dice roller</h1>
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
              </div>

              <StatsDisplay
                totalRolls={TOTAL_DICE_ROLLED}
                totalStatRolls={TOTAL_STAT_ROLLS}
                averageSingleRoll={AVERAGE_SINGLE_ROLL}
              />
            </Row>
            <Row>
              <SelectField
                onChange={this.setSelectedRule}
                value={selectedRule}
                data={ruleOptions}
                label={'Rolling rule'}
                styles={{ maxWidth: '250px' }}
              />
            </Row>
            <Row>
              <CurrentRoll currentRolls={displayRolls[displayRolls.length - 1]}/>
            </Row>
            <TablePositioner>
              <AdvancedTable
                columns={columns}
                rowData={displayRolls}
              />
            </TablePositioner>
          </PageInnerContent>
        </PageWrapper>
      </PageContainer>
    );
  }
}
