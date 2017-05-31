import { Game } from '../game/game.model';
import { EventEmitter, Injectable } from '@angular/core';
import { GameService } from '../game/game.service';

@Injectable()
export class RentService {

  constructor(private gameService: GameService){}

  rentedGames = [];

  getRentedGames(){
    this.gameService.fetchRentedGames();
    return this.gameService.newGames;
  }

  returnGame(game:Game){
    this.gameService.returnGame(game);
  }


}
