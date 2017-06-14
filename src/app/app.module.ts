import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DataService } from './services/websocket.service';
import { IngredientService } from './services/ingredients/ingredient.service';
import { FishService } from './services/ingredients/fish.service';
import { RiceService } from './services/ingredients/rice.service';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
  ],
  providers: [
    DataService,
    IngredientService,
    FishService,
    RiceService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
