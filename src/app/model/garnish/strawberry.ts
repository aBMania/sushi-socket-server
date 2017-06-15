import { Garnish } from './garnish';

export class Strawberry extends Garnish {
  public get expirationTime(): number {
    return 2 * 60;
  }
}
