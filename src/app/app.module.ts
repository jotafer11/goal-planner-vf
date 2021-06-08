import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DailyComponent } from './components/daily/daily.component';
import { HttpClientModule } from '@angular/common/http';

import { DailyService } from './services/daily.service';
import { LoadScriptsService } from "./services/load-scripts.service";

import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component'


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DailyComponent,
    AdminComponent,
    AboutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FormsModule
  ],
  providers: [
  DailyService,
  LoadScriptsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
