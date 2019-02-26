import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import { range } from 'lodash';
import { round } from 'mathjs';

import AdvancedTable from '~/components/advanced-table';
import { CurrentRoll, SelectField } from '~/components';
import { IStatRolls } from '~/modules/dice-reducer';
import { IDiceRuleset } from '~/core/constants';

import { ButtonsContainer, PageContainer, PageInnerContent, PageWrapper, Row, TablePositioner } from './styles';

interface IProps {
  [x: string]: any;
}

interface IContainerProps {
  clearAllRolls: () => void;
  rollStats: (amount: number) => void;
  selectedRuleset: IDiceRuleset;
  selectedRulesetId: string;
  statRolls: IStatRolls;
  switchRule: (rule: string) => void;
  rulesetOptions: Array<{ key: string; value: string }>;
}

type IAllProps = IProps & IContainerProps;

interface IRuleOption {
  value: string;
  key: string;
}

interface IState {
  rolls: number[][][];
  ruleOptions: IRuleOption[];
  selectedRule: string;
}

export default class HomePage extends Component<IAllProps, IState> {
  state = {
    rolls: [],
    ruleOptions: [],
    selectedRule: '',
  };

  constructor(props) {
    super(props);

    this.getDisplayRolls = this.getDisplayRolls.bind(this);
  }

  getDisplayRolls() {
    const { statRolls } = this.props;
    return Object.keys(statRolls).map((key: string) => {
      const statRow = statRolls[key];
      const computedStatBlock: number[] = statRow.sort((a, b) => b - a);
      const average = round(computedStatBlock.reduce((total, current) => total + current) / 6, 2);
      return {
        ...computedStatBlock,
        average,
      };
    });
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
    const {
      clearAllRolls,
      rollStats,
      rulesetOptions,
      selectedRulesetId,
      switchRule,
    } = this.props;
    const columns = this.getColumns();
    const displayRolls = this.getDisplayRolls();

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
                  <Button variant="contained" color="primary" onClick={() => rollStats(1)}>
                    ROLL!
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => rollStats(100)}>
                    ROLL 100!
                  </Button>
                  <Button variant="contained" color="primary" onClick={() => clearAllRolls()}>
                    CLEAR!
                  </Button>
                </ButtonsContainer>
              </div>
            </Row>
            <Row>
              <SelectField
                onChange={switchRule}
                value={selectedRulesetId}
                data={rulesetOptions}
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
