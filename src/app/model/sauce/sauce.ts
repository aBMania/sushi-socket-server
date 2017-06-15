import { Ingredient } from '../ingredient';

export class Sauce extends Ingredient {
  get expirationTime(): number {
    return 60 * 10;
  }
}
