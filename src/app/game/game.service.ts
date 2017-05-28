import { EventEmitter, Injectable } from '@angular/core';
import { Game } from './game.model';
import { RentService } from '../rent/rent.service';
import { Subject} from 'rxjs/Subject';
import { Http, Response } from '@angular/http';
import { AuthService } from '../auth/auth.service';
import 'rxjs/Rx';

@Injectable()
export class GameService {

  gameSelected = new EventEmitter<Game>();

  newGames:Subject<Game[]> = new Subject();

  games: Game[] = [];

  constructor(private rentService: RentService, private http: Http, private authService: AuthService ){}

  fetchGames(){
    const token = this.authService.getToken();
    this.http.get('https://game-library-6da4c.firebaseio.com/games.json?auth='+ token)
    .map((resp: Response) => {
      const games: Game[] = resp.json();
      return games;
    }).subscribe((games: Game[]) => {
       if(games != null) {
         this.games = games;
         this.newGames.next(this.games);
       }

    });
  }

  saveGame(game: Game){
    const token = this.authService.getToken();
    this.games.push(game);
    this.newGames.next(this.games);
    return this.http.put('https://game-library-6da4c.firebaseio.com/games.json?auth='+ token,  this.games);

  }

  updateGame(id:number, game: Game){
    const token = this.authService.getToken();
    this.games[id] = game;
    this.newGames.next(this.games);
    return this.http.put('https://game-library-6da4c.firebaseio.com/games.json?auth='+ token,  this.games);

  }

  getGame(id:number){
    return this.games[id];
  }

  private nextweek(){
    var today = new Date();
    var nextweek = new Date(today.getFullYear(), today.getMonth(), today.getDate()+7);
    return nextweek;
}

  rent(id:number, game:Game){
    game.rented = true;
    game.returnDate = this.nextweek();
    game.user = this.authService.getCurrentUser().email;
    this.updateGame(id,game);
  }
}
