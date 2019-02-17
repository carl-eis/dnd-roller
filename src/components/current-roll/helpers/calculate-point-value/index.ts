const roundDown = (num: number): number => {
  const splitNumbers: number[] = num.toString().split('.').map(n => parseInt(n, 10));
  if (splitNumbers.length < 1) return num;
  const [wholeNumber, fractionNumber] = splitNumbers;
  const isNegative: boolean = num < 0;
  return (fractionNumber >= 0 && isNegative) ? wholeNumber - 1 : wholeNumber;
};

export default (oldVal: string): string => {
  const parsedVal: number = parseInt(oldVal, 10);
  const calVal: number = (parsedVal - 10) / 2;
  return roundDown(calVal).toString();
};
