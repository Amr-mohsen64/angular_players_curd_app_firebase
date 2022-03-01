import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { PlayerFormComponent } from './components/player-form/player-form.component';
import { PlayersComponent } from './components/players/players.component';
import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { environment } from 'src/environments/environment';
import { FormsModule } from '@angular/forms';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';
import { FlashMessagesModule } from 'flash-messages-angular';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    PlayerFormComponent,
    PlayersComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
