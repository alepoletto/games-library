import { Component, OnInit, Input } from '@angular/core';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { ActivatedRoute, Router, Params } from '@angular/router';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {
 id:number
 game:Game;

  constructor(private gameService: GameService, private route: ActivatedRoute, private router: Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.game = this.gameService.getGame(this.id);
    })

  }

  rentGame(){
    this.gameService.rent(this.id,this.game).subscribe(() => {

    });
  }

  editGame(){
    this.router.navigate(['edit'], {relativeTo: this.route});
  }

}
