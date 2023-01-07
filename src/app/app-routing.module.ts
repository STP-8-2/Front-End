import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { GeneralCombatComponent } from './general-combat/general-combat.component';
import { StartScreenComponent } from './start-screen/start-screen.component';
import { DirectionScreenComponent } from './direction-screen/direction-screen.component';
import { EndComponent } from './end/end.component';
import { InventoryScreenComponent } from './inventory-screen/inventory-screen.component';
import { GeneralDirectionComponent } from './general-direction/general-direction.component';
import { HeroAttackComponent } from './hero-attack/hero-attack.component';
import { VictoryScreenComponent } from './victory-screen/victory-screen.component';
import { PoisonScreenComponent } from './poison-screen/poison-screen.component';
import { ExcerptComponent } from './excerpt/excerpt.component';

const routes: Routes = [
  { path: '', component: TitleScreenComponent},
  { path: 'fight', component: GeneralCombatComponent},
  { path: 'start', component: StartScreenComponent },
  { path: 'direction-first', component: DirectionScreenComponent},
  { path: 'end', component: EndComponent},
  { path: 'inventory', component: InventoryScreenComponent}, 
  { path: 'direction', component: GeneralDirectionComponent},
  { path: 'fight-progress', component: HeroAttackComponent},
  { path: 'victory', component: VictoryScreenComponent},
  { path: 'hazzard', component: PoisonScreenComponent},
  { path: 'excerpt', component: ExcerptComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
