import { Component } from '@angular/core';
import { FishService, FishStash } from './services/ingredients/fish.service';
import { RiceService, RiceStash } from './services/ingredients/rice.service';
import { SauceService, SauceStash } from './services/ingredients/sauce.service';
import { GarnishService, GarnishStash } from './services/ingredients/garnish.service';
import { WrapperService, WrapperStash } from './services/ingredients/wrapper.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  public fishStash: FishStash;
  public garnishStash: GarnishStash;
  public riceStash: RiceStash;
  public sauceStash: SauceStash;
  public wrapperStash: WrapperStash;

  constructor(public fishService: FishService,
              public riceService: RiceService,
              public sauceService: SauceService,
              public garnishService: GarnishService,
              public wrapperService: WrapperService) {

    this.fishStash = this.fishService.stash;
    this.garnishStash = this.garnishService.stash;
    this.riceStash = this.riceService.stash;
    this.sauceStash = this.sauceService.stash;
    this.wrapperStash = this.wrapperService.stash;
  }
}
