import { Component, OnInit } from '@angular/core';
import { Player } from 'src/app/models/player';
import { PlayerService } from 'src/app/services/player.service';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.css']
})
export class PlayersComponent implements OnInit {

  players: Player[] = []

  constructor(private _playerService: PlayerService) { }

  ngOnInit(): void {
    this._playerService.getPlayers().subscribe((p: Player[]) => {
      console.log(p);

      this.players = p
    })
    // this._playerService.getPlayers().subscribe({
    //   next(p: Player[]) {
    //     console.log(p);
    //   },
    //   error(err) {
    //     console.log(err);
    //   }
    // })
  }

}
