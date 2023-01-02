import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TitleScreenComponent } from './title-screen/title-screen.component';
import { GeneralCombatComponent } from './general-combat/general-combat.component';

const routes: Routes = [
  { path: '', component: TitleScreenComponent},
  { path: 'fight', component: GeneralCombatComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
