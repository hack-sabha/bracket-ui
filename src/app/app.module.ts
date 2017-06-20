import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing/app-routing.module';

// Imports for loading & configuring the in-memory web api
import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { TournamentComponent } from './components/tournament/tournament.component';
import { TournamentDetailComponent } from './components/tournament-detail/tournament-detail.component';
import { TournamentSearchComponent } from './components/tournament-search/tournament-search.component';

import { TournamentService }          from './services/tournament.service';

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
        AppRoutingModule
    ],
    declarations: [
        AppComponent,
        DashboardComponent,
        TournamentDetailComponent,
        TournamentComponent,
        TournamentSearchComponent
    ],
    providers: [TournamentService],
    bootstrap: [AppComponent]
})
export class AppModule { }
