// Req 2
import Race from './Race';

class Elf extends Race {
  private static _instance = 0;
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    this._maxLifePoints = 99;
    Elf._instance += 1;
  }

  static createdRacesInstances(): number {
    return Elf._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Elf;