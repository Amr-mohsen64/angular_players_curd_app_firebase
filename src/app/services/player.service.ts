import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { Player } from '../models/player';
import { AngularFirestore } from '@angular/fire/firestore'
@Injectable({
  providedIn: 'root'
})
export class PlayerService {

  constructor(private afs: AngularFirestore) { }

  getPlayers(): Observable<Player[]> {
    // return this.afs.collection<Player>('players').valueChanges()
    return this.afs.collection<Player>('players')
      .snapshotChanges()
      .pipe(
        map((changes: any) => changes.map((c: any) => {
          return {
            id: c.payload.doc.id,
            ...c.payload.doc.data()
          }
        }
        ))
      )

  }

  getSinglePlayer(id: string): Observable<Player> {
    // return this.afs.collection<Player>(`players/${id}`).doc(id)
    return this.afs.doc<Player>(`players/${id}`).snapshotChanges()
      .pipe(
        map((action: any) => {
          console.log(action.payload);

          if (action.payload.exists === false) {
            return new Object as Player;
          } else {
            const data = action.payload.data() as Player;
            data.id = action.payload.id;
            return data;
          }
        })
      );
  }

  addPlayer(player: Player): void {    
    this.afs.collection<Player>("players").add(player)
  }

  updatePlayer(player: Player, playerId: string) {
    return this.afs.collection<Player>("players").doc(playerId).update(player)
  }

  deletePlayer(playerId: string) {
    return this.afs.collection<Player>("players").doc(playerId).delete()
  }
}
