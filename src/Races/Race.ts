abstract class Race {
  private _name: string;
  private _dexterity: number;

  constructor(n: string, d: number) {
    this._name = n;
    this._dexterity = d;
  }

  get name(): string {
    return this._name;
  }

  get dexterity(): number {
    return this._dexterity;
  }

  static createdRacesInstances(): number {
    throw new Error('Not implemented');
  }

  abstract get maxLifePoints(): number;
}

export default Race;