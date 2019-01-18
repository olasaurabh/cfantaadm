import { Injectable } from '@angular/core';
import { Subject } from '../models/subjects';
import { AngularFirestoreCollection, AngularFirestore, AngularFirestoreDocument } from '../../../node_modules/@angular/fire/firestore';
import { Observable } from '../../../node_modules/rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {
  subjectCollection: AngularFirestoreCollection<Subject>;
  subjects: Observable<Subject[]>;
  subjectDoc: AngularFirestoreDocument<Subject>;

  constructor(private afs: AngularFirestore) {

    this.subjectCollection = this.afs.collection('subjects');

    this.subjects = this.subjectCollection.snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Subject;
        data.id = a.payload.doc.id;
        return data;

      }))

    );


  }

  addSubject(subject: Subject) {
    return this.subjectCollection.add(subject)
      .then(data => {
        console.log('service mein chala');
        return data.id;

      });
  }

  getSubjects() {
    return this.subjectCollection.snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Subject;
        data.id = a.payload.doc.id;
        return data;
      })
    }));

  }

  updateSubject(subject: Subject) {
    this.subjectDoc = this.afs.doc<Subject>('subjects/' + subject.id);
    return this.subjectDoc.update(subject)
      .then(data => {
        return data;
      });
  }
  
}
