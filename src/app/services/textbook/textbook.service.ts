import { Injectable } from '@angular/core';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {Textbook} from '../../models/textbooks'


@Injectable({
  providedIn: 'root'
})
export class TextbookService {
  textbookCollection: AngularFirestoreCollection<Textbook>;
  textbooks: Observable<Textbook[]>;
  textbookDoc: AngularFirestoreDocument<Textbook>;

  constructor(private afs: AngularFirestore) {

    this.textbookCollection = this.afs.collection('textbooks');

    this.textbooks = this.textbookCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Textbook;
        data.id = a.payload.doc.id;
        return data;

      }))

    );


  }

  addTextbook(textbook) {
    console.log('anything');
    return this.textbookCollection.add(textbook)
      .then(data => {
        console.log('service mein chala');
        return data.id;

      });
  }

  getTextbooks() {
    return this.textbookCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Textbook;
        data.id = a.payload.doc.id;
        return data;
      })
    }));

  }

  updateTextbook(textbook: Textbook) {
    this.textbookDoc = this.afs.doc<Textbook>('textbooks/' + textbook.id);
    return this.textbookDoc.update(textbook)
      .then(data => {
        return data;
      });
  }
  
}

