import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/data.service';
import { IngredientService } from './services/ingredients/ingredient.service';
import { FishService } from './services/ingredients/fish.service';
import { RiceService } from './services/ingredients/rice.service';
import { SauceService } from './services/ingredients/sauce.service';
import { WrapperService } from './services/ingredients/wrapper.service';
import { GarnishService } from './services/ingredients/garnish.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    DataService,
    FishService,
    GarnishService,
    IngredientService,
    RiceService,
    SauceService,
    WrapperService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
