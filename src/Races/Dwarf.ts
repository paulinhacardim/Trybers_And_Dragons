// Req 2
import Race from './Race';

class Dwarf extends Race {
  private static _instance = 0;
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    Dwarf._instance += 1;
    this._maxLifePoints = 80;
  }

  static createdRacesInstances(): number {
    return Dwarf._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Dwarf;