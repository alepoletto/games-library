import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { GameRoutingModule } from './game-routing.module';

import { GameComponent } from './game.component';
import { GameListComponent } from './game-list/game-list.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { GameItemComponent } from './game-list/game-item/game-item.component';
import { GameEditComponent } from './game-edit/game-edit.component';
import { GameStartComponent } from './game-start/game-start.component';


@NgModule({
  declarations: [
    GameComponent,
    GameListComponent,
    GameDetailComponent,
    GameItemComponent,
    GameEditComponent,
    GameStartComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    GameRoutingModule
  ]
})
export class GameModule {

}
