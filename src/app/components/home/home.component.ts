import { Component, OnInit } from '@angular/core';
import { LoadScriptsService } from "../../services/load-scripts.service";

import { DailyService } from '../../services/daily.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  dailyscrums: any;
  dailyscrumVer:any={id:''};	

  constructor( private _LoadScripts:LoadScriptsService,
  				private daily:DailyService	) { 
    _LoadScripts.Load(["calendar","startCalendar"]);

      		this.daily.retornaDailys().subscribe(dailyscrums=>{
  			this.dailyscrums=dailyscrums;
  			console.log(this.dailyscrums);
  		})
  } 

  ngOnInit(): void {
  }

  ver(dailyscrum){
    console.log(dailyscrum);
    this.dailyscrumVer=dailyscrum;
  }


}
