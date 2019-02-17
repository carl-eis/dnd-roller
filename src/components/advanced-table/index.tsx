import React, { Component } from 'react';

import { AgGridReact } from 'ag-grid-react';

import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';

interface ITableColumn {
  headerName: string;
  field: string;
}

interface IProps {
  columns: ITableColumn[];
  rowData: any[];
}

class AdvancedTable extends Component<IProps> {
  private gridApi: any;

  constructor(props) {
    super(props);

    this.onGridReady = this.onGridReady.bind(this);
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridApi.sizeColumnsToFit();
  }

  componentDidMount() {

  }

  render() {
    const { columns, rowData } = this.props;
    return (
      <div
        className="ag-theme-balham"
        style={{
          height: 'auto',
          maxHeight: '580px',
          minHeight: '300px',
          width: '100%',
        }}
      >
        <AgGridReact
          columnDefs={columns}
          rowData={rowData}
          animateRows={true}
          onGridReady={this.onGridReady}
        >
        </AgGridReact>
      </div>
    );
  }
}

export default AdvancedTable;
