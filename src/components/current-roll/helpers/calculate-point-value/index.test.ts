import calculatePointValue from './';

describe('calculate point value', () => {
  it('should handle a value of 7', () => {
    const result = calculatePointValue('7');
    const expected = '-2';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 8', () => {
    const result = calculatePointValue('8');
    const expected = '-1';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 9', () => {
    const result = calculatePointValue('9');
    const expected = '-1';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 10', () => {
    const result = calculatePointValue('10');
    const expected = '0';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 11', () => {
    const result = calculatePointValue('11');
    const expected = '0';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 12', () => {
    const result = calculatePointValue('12');
    const expected = '1';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 13', () => {
    const result = calculatePointValue('13');
    const expected = '1';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 14', () => {
    const result = calculatePointValue('14');
    const expected = '2';
    expect(result).toEqual(expected);
  });
  it('should handle a value of 15', () => {
    const result = calculatePointValue('15');
    const expected = '2';
    expect(result).toEqual(expected);
  });
});
