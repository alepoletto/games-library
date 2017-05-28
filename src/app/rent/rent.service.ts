import { Game } from '../game/game.model';

export class RentService {

  rentedGames = [];

  rent(game: Game){
    game.rented = true;
    this.rentedGames.push(game);
  }

  getRentedGames(){
    return this.rentedGames;
  }

}
