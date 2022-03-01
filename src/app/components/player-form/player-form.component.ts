import { AfterViewInit, Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FlashMessagesService } from 'flash-messages-angular';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-player-form',
  templateUrl: './player-form.component.html',
  styleUrls: ['./player-form.component.css']
})
export class PlayerFormComponent implements OnInit {

  playerId: string = '';
  player: Player = {
    id: "",
    firstName: "",
    lastName: "",
    country: "",
    age: 0
  };

  constructor(private _playerService: PlayerService,
    private router: Router,
    private route: ActivatedRoute,
    private flashMsg: FlashMessagesService) { }

  ngOnInit(): void {
    this.playerId = this.route.snapshot.paramMap.get("id") as string

    this._playerService.getSinglePlayer(this.playerId).subscribe(p => this.player = p)
  }


  save(playerForm: NgForm) {
    console.log(this.playerId);

    if (!playerForm.valid) {
      this.flashMsg.show('form invalid', {
        cssClass: 'alert alert-danger',
        setTimeout: 4000
      })
    } else {
      if (this.playerId) {
        this._playerService.updatePlayer(playerForm.value, this.playerId)
        this.flashMsg.show('player updated', {
          cssClass: 'alert alert-primary',
          setTimeout: 4000
        })
      } else {
        this._playerService.addPlayer(playerForm.value)
        this.flashMsg.show('new player haas been added', {
          cssClass: 'alert alert-primary',
          setTimeout: 4000
        })
      }
      this.router.navigate(['/'])
    }
  }

  delete() {
    this._playerService.deletePlayer(this.playerId)
    this.flashMsg.show('new player haas been added', {
      cssClass: 'alert alert-danger',
      setTimeout: 4000
    })
    this.router.navigate(['/'])

  }


}
