import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PlayersComponent } from './components/players/players.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { ParentComponent } from './components/parent/parent.component';



const routes: Routes = [
  { path: '', component: PlayersComponent },
  { path: 'player/new', component: PlayerFormComponent },
  { path: 'player/:id', component: PlayerFormComponent },
  { path: 'parent', component: ParentComponent },
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
