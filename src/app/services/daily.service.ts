import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Dailyscrum } from '../models/dailyscrum';

import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})


/* Fetch Dailys */

export class DailyService {
  private itemsCollection: AngularFirestoreCollection<Dailyscrum>;
  dailyscrums: Observable<Dailyscrum[]>;
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Dailyscrum>('dailyscrums');
    this.dailyscrums = this.itemsCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Dailyscrum;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  retornaDailys(){
    return this.dailyscrums;
  }



}  

    


