import React, { FunctionComponent } from 'react';
import { range } from 'lodash';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { TableWrapper } from './styles';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

let id = 0;

function createData(name, calories, fat, carbs, protein) {
  id += 1;
  return { id, name, calories, fat, carbs, protein };
}

const fakeRows = [
  createData('Stat 1', 159, 6.0, 24, 4.0),
  createData('Stat 2', 237, 9.0, 37, 4.3),
  createData('Stat 3', 262, 16.0, 24, 6.0),
  createData('Stat 4', 305, 3.7, 67, 4.3),
  createData('Stat 5', 356, 16.0, 49, 3.9),
  createData('Stat 5', 356, 16.0, 49, 3.9),
];

const fakeHeadings: ITableColumn[] = range(0, 6).map((num: number) => {
  const computedNum: number = num + 1;
  return { displayName: `Stat ${computedNum}`, key: num };
});

export interface ITableColumn {
  displayName: string;
  key: string;
}

interface IProps {
  columns?: ITableColumn[];
  rows: any;
}

const SimpleTable: FunctionComponent<IProps> = (props) => {
  const { columns, rows } = props;
  return (
    <TableWrapper>
      <Paper>
        <Table>
          <TableHead>
            <TableRow>
              {columns && columns.map((item, index) => (
                <TableCell>{item.displayName}</TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows && rows.map((row, rowIndex) => (
              <TableRow key={rowIndex}>
                {columns && columns.map((column, columnIndex) => (
                  <TableCell align="left" key={`${column.key}`}>{row[column.key]}</TableCell>
                ))}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Paper>
    </TableWrapper>
  );
};

SimpleTable.defaultProps = {
  columns: fakeHeadings,
  rows: fakeRows,
};

export default withStyles(styles as any)(SimpleTable);
