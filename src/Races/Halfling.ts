// Req 2
import Race from './Race';

class Halfling extends Race {
  private static _instance = 0;
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    Halfling._instance += 1;
    this._maxLifePoints = 60;
  }

  static createdRacesInstances(): number {
    return Halfling._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Halfling;