import { Wrapper } from './wrapper';

export class Algua extends Wrapper {
  get expirationTime(): number {
    return 2 * 60;
  }
}
