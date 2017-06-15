import { Garnish } from './garnish';

export class Cucumber extends Garnish {
  get expirationTime(): number {
    return 5 * 60;
  }
}
