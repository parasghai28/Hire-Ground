import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CandidatesModule } from './modules/candidates/candidates.module';
@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    AppRoutingModule,
    CandidatesModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
