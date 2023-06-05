// Req 5
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Necromancer extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType;

  constructor(n: string) {
    super(n);
    this._energyType = 'mana';
    Necromancer._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Necromancer._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Necromancer;