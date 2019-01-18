import { Component, OnInit, Inject } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { Subject } from '../../../models/subjects';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditSubjectComponent } from '../edit-subject/edit-subject.component';

@Component({
  selector: 'app-view-subjects',
  templateUrl: './view-subjects.component.html',
  styleUrls: ['./view-subjects.component.css']
})
export class ViewSubjectsComponent implements OnInit {

  constructor(private service: SubjectService, public dialog: MatDialog) { }

  subjects: Subject[] = [];

  ngOnInit() {
    this.service.getSubjects().subscribe(data=>{
      this.subjects = data;
    })
  }

  editSubject(subject){
    const dialogRef = this.dialog.open(EditSubjectComponent, {
      width: '600px',
      data: {subject}
    });
  }

}
