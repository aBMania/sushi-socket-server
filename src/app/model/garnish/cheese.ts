import { Garnish } from './garnish';

export class Cheese extends Garnish {
  public get expirationTime(): number {
    return 5 * 60;
  }
}
