import { Component, OnInit, OnDestroy } from '@angular/core';
import { RentService } from '../rent.service';
import { AuthService } from '../../auth/auth.service';
import { Game } from '../../game/game.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'app-rented-list',
  templateUrl: './rented-list.component.html',
  styleUrls: ['./rented-list.component.css']
})
export class RentedListComponent implements OnInit, OnDestroy {

  rentedGames;

  rentedGameSub: Subscription;

  constructor(private rentService: RentService, private authService: AuthService) { }

  returnGame(game:Game){
    this.rentService.returnGame(game);
  }

  ngOnInit() {
    this.rentedGameSub = this.rentService.getRentedGames().subscribe((games: Game[]) => {
      this.rentedGames = games.filter((game: Game) => {
        if(game.rented) {
          return true;
        }
        return false;
      });
    });
  }

  isUser(game:Game){
    if(this.authService.getCurrentUser().email === game.user){
      return false;
    }
    return true;
  }

  ngOnDestroy(){
    this.rentedGameSub.unsubscribe();
  }
}
