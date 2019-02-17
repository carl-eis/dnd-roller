interface IRuleOption {
  value: string;
  key: string;
}

export interface IHomePageReducerState {
  rolls: number[][][];
  ruleOptions: IRuleOption[];
  selectedRule: string;
}

const initialState = {
  rolls: [],
  ruleOptions: {
    rolls: [],
    ruleOptions: [{
      value: 'Roll 3',
      key: 'roll_3',
    }, {
      value: 'Roll 4, drop lowest',
      key: 'roll_4',
    }],
    selectedRule: 'roll_3',
  },
};

export default function (state = initialState, action) {
  const { type, data } = action;
  switch (type) {
    default:
      return state;
  }
}
