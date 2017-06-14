import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Fish } from './model/fish/fish';
import { Rice } from './model/rice/rice';
import { FishService } from './services/ingredients/fish.service';
import { RiceService } from './services/ingredients/rice.service';
import { SauceService } from './services/ingredients/sauce.service';
import { GarnishService } from './services/ingredients/garnish.service';
import { WrapperService } from './services/ingredients/wrapper.service';
import { Sauce } from './model/sauce/sauce';
import { Garnish } from './model/garnish/garnish';
import { Wrapper } from './model/wrapper/wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  public fish$: Observable<Fish>;
  public rice$: Observable<Rice>;
  public sauce$: Observable<Sauce>;
  public garnish$: Observable<Garnish>;
  public wrapper$: Observable<Wrapper>;

  public fishCount$: Observable<number>;
  public riceCount$: Observable<number>;
  public sauceCount$: Observable<number>;
  public garnishCount$: Observable<number>;
  public wrapperCount$: Observable<number>;

  constructor(public fishService: FishService,
              public riceService: RiceService,
              public sauceService: SauceService,
              public garnishService: GarnishService,
              public wrapperService: WrapperService) {

    this.fish$ = this.fishService.fish$;
    this.rice$ = this.riceService.rice$;
    this.sauce$ = this.sauceService.sauce$;
    this.garnish$ = this.garnishService.garnish$;
    this.wrapper$ = this.wrapperService.wrapper$;

    this.fishCount$ = this.fish$.map((x: Fish, n: number) => n + 1);
    this.riceCount$ = this.rice$.map((x: Rice, n: number) => n + 1);
    this.sauceCount$ = this.sauce$.map((x: Rice, n: number) => n + 1);
    this.garnishCount$ = this.garnish$.map((x: Rice, n: number) => n + 1);
    this.wrapperCount$ = this.wrapper$.map((x: Rice, n: number) => n + 1);
  }
}
