import { Observable } from 'rxjs/Observable';
import { ReplaySubject } from 'rxjs/ReplaySubject';

export class Ingredient {
  public name: String;
  public text: String;
  public tweetId: String;
  public expiration$ = Observable.timer(this.expirationTime * 1000)
    .publishReplay();

  public used$: Observable<boolean>;
  private _used$: ReplaySubject<any> = new ReplaySubject(1);

  constructor() {
    this.expiration$.connect();
    this.used$ = this._used$.asObservable();
  }

  get expirationTime(): number {
    return 60;
  }

  public use(): void {
    this._used$.next(true);
  }

  public unuse(): void {
    this._used$.next(false);
  }
}
