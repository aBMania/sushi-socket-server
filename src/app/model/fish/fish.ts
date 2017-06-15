import { Ingredient } from '../ingredient';

export abstract class Fish extends Ingredient {
  public get expirationTime() {
    return 2 * 60;
  }
}
