import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { DailyComponent } from './components/daily/daily.component';
import { AdminComponent } from './components/admin/admin.component';
import { AboutComponent } from './components/about/about.component';

const routes: Routes = [

{ path:'', pathMatch: 'full', component: HomeComponent },
{ path: 'home', component: HomeComponent },
{ path: 'dailyscrums/:dailyscrumId', component: DailyComponent },
{ path: 'admin', component: AdminComponent },
{ path: 'about', component: AboutComponent },


];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: false })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
