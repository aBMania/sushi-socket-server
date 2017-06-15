import { Ingredient } from '../ingredient';

export class Rice extends Ingredient {
  get expirationTime(): number {
    return 30;
  }
}
