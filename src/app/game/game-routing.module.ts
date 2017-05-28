import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';

import { GameComponent } from './game.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameStartComponent } from './game-start/game-start.component';

import { AuthGuard } from '../auth/auth-guard.service';


const gameRoutes: Routes = [
  { path: '', component: GameComponent ,  children:[
      { path: '', component: GameStartComponent , canActivate: [AuthGuard]},
      { path: 'new', component: GameEditComponent, canActivate: [AuthGuard]},
      { path: ':id', component: GameDetailComponent, canActivate: [AuthGuard]},
      { path: ':id/edit', component: GameEditComponent, canActivate: [AuthGuard]}
    ]
  }
]
@NgModule({
  imports: [
    RouterModule.forChild(gameRoutes)
  ],
  exports: [RouterModule]
})
export class GameRoutingModule {

}
