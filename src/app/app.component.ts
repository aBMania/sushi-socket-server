import { Component } from '@angular/core';
import { Observable } from 'rxjs/Rx';
import { Fish } from './model/fishes/fish';
import { Rice } from './model/rice';
import { FishService } from './services/ingredients/fish.service';
import { RiceService } from './services/ingredients/rice.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'app';

  public fish$: Observable<Fish>;
  public rice$: Observable<Rice>;

  public fishCount$: Observable<number>;
  public riceCount$: Observable<number>;

  constructor(public fishService: FishService, public riceService: RiceService) {
    this.fish$ = this.fishService.fish$;
    this.rice$ = this.riceService.rice$;

    this.fishCount$ = this.fish$.map((x: Fish, n: number) => n + 1);
    this.riceCount$ = this.rice$.map((x: Rice, n: number) => n + 1);
  }
}
