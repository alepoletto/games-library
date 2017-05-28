import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules} from '@angular/router';

import { RentComponent } from './rent/rent.component';
import { UsersComponent } from './manage/users/users.component';
import { AuthGuard } from './auth/auth-guard.service';
import { HomeComponent } from './core/home/home.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'games' , loadChildren: './game/game.module#GameModule'},
  { path: 'rent', component: RentComponent , canActivate: [AuthGuard]},
  { path: 'users', component: UsersComponent }
];



@NgModule({
  imports: [ RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [ RouterModule ]
})
export class AppRoutingModule {

}
