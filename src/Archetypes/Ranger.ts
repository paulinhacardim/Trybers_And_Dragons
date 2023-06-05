// Req 5
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Ranger extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType;

  constructor(n: string) {
    super(n);
    this._energyType = 'stamina';
    Ranger._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Ranger._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Ranger;