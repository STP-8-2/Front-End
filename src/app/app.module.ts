import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { GeneralCombatComponent } from './general-combat/general-combat.component';
import { InventoryScreenComponent } from './inventory-screen/inventory-screen.component';
import { MapComponent } from './map/map.component';
import { DeathScreenComponent } from './death-screen/death-screen.component';
import { EndComponent } from './end/end.component';
import { MatCardModule } from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    TitleScreenComponent,
    GeneralCombatComponent,
    InventoryScreenComponent,
    MapComponent,
    DeathScreenComponent,
    EndComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
