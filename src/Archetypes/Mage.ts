// Req 5
import Archetype from './Archetype';
import { EnergyType } from '../Energy';

class Mage extends Archetype {
  private static _createdInstances = 0;
  private _energyType: EnergyType;

  constructor(n: string) {
    super(n);
    this._energyType = 'mana';
    Mage._createdInstances += 1;
  }

  static createdArchetypeInstances(): number {
    return Mage._createdInstances;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }
}

export default Mage;