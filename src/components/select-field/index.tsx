import React, { Component } from 'react';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import { StyledSelect } from './styles';

interface IDropdownData {
  key: string;
  value: string;
}

interface IProps {
  label: string;
  data: IDropdownData[];
  value: any;
  onChange: (...args) => void;
  styles?: object;
}

interface IState {
  [x: string]: any;
}

export default class SelectField extends Component<IProps, IState> {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { onChange } = this.props;
    const { target: { value } } = event;
    onChange(value);
  }

  render() {
    const { value, data, label, styles = {} } = this.props;
    return (
      <FormControl style={{
        display: 'flex',
        flex: '1 1 auto',
        ...styles,
      }}>
        <InputLabel htmlFor="age-simple">{label}</InputLabel>
        <StyledSelect
          value={value}
          onChange={this.handleChange}
        >
          {data.map(item => (
            <MenuItem value={item.key}>{item.value}</MenuItem>
          ))}
        </StyledSelect>
      </FormControl>
    );
  }
}

