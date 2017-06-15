import { Wrapper } from './wrapper';

export class Egg extends Wrapper {
  get expirationTime(): number {
    return 30;
  }
}
