import { Garnish } from './garnish';

export class Avocado extends Garnish {
  public get expirationTime(): number {
    return 2 * 60;
  }
}
