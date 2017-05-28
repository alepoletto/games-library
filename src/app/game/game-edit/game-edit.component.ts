import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { GameService } from '../game.service';
import { Game } from '../game.model';
import { FormGroup, FormControl, FormArray, Validators} from '@angular/forms';

@Component({
  selector: 'app-game-edit',
  templateUrl: './game-edit.component.html',
  styleUrls: ['./game-edit.component.css']
})
export class GameEditComponent implements OnInit, OnDestroy {
  editMode = false;
  editItem:Game;
  id:number;
  gameForm: FormGroup;

  constructor( private route: ActivatedRoute, private gameService: GameService, private router: Router) { }


  ngOnInit() {
    this.route.params.subscribe((params:Params) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      this.initForm();
    });
  }

  onSubmit(){
    let game: Game = this.gameForm.value;
    if(this.editMode){
      this.gameService.updateGame(this.id, game).subscribe(() => {
      });
    } else {
      this.gameService.saveGame(game).subscribe(() => {
        console.log('saved')
      });
    }

  }

  onCancel(){
    this.router.navigate(['/games']);
  }


  private initForm(){
   let gameTitle = '';
   let imageUrl = '';
   let gameDescription = '';

   if(this.editMode){
     const game = this.gameService.getGame(this.id);
     gameTitle = game.title;
     imageUrl = game.imageUrl;
     gameDescription = game.description;
   }

   this.gameForm = new FormGroup({
     'title': new FormControl(gameTitle, Validators.required),
     'imageUrl': new FormControl(imageUrl, Validators.required),
     'description': new FormControl(gameDescription, Validators.required)
   })
 }


  ngOnDestroy() {

  }

}
