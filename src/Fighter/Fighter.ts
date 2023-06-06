// Req 8
import Energy from '../Energy';
import SimpleFighter from './SimpleFighter';
// import SimpleFighter from './SimpleFighter';

// Req 6
interface Fighter extends SimpleFighter {
  defense: number;
  energy?: Energy;

  special?(enemy: Fighter): void
  levelUp(): void
  
}

export default Fighter;