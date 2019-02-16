import getStatsObj from './';

describe('get stats obj', () => {
  it('should do some stuff', () => {
    const result = getStatsObj();
    console.log(JSON.stringify(result, null, 2));
    expect(result).toBeDefined();
  });
});
