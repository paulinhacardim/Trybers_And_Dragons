// Req 2
import Race from './Race';

class Orc extends Race {
  private static _instance = 0;
  private _maxLifePoints: number;

  constructor(n: string, d: number) {
    super(n, d);
    Orc._instance += 1;
    this._maxLifePoints = 74;
  }

  static createdRacesInstances(): number {
    return Orc._instance;
  }

  get maxLifePoints(): number {
    return this._maxLifePoints;
  }
}

export default Orc;