export default class {
  private avgSingleRolls: number = 0;
  public totalRolls: number;
  public totalStatRolls: number = 0;

  constructor(private rolls: number[][][]) {
    this.totalRolls = rolls.length * 6 * 3;
    this.totalStatRolls = rolls.length;
    this.calculateStats();
  }

  private calculateStats(): void {
    let totalDice = 0;

    const flattenRoll = (total: number, roll: number[]): number => {
      return total + roll.reduce((acc, current) => {
        totalDice = totalDice + 1;
        return acc + current;
      }, 0);
    };

    const flattenStatBlock = (total: number, currentStatBlock: number[][]): number => {
      return total + currentStatBlock.reduce(flattenRoll, 0);
    };

    const allDiceRolls: number = this.rolls.reduce(flattenStatBlock, 0);
    const avgSingleRoll = allDiceRolls / totalDice;
    if (!avgSingleRoll) {
      this.avgSingleRolls = 0;
    } else {
      this.avgSingleRolls = avgSingleRoll;
    }
  }

  get averageRoll(): number {
    return this.avgSingleRolls;
  }
}
