import { Component, OnInit, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../../../models/subjects';
import { SubjectService } from '../../../services/subject.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

@Component({
  selector: 'app-edit-subject',
  templateUrl: './edit-subject.component.html',
  styleUrls: ['./edit-subject.component.css']
})
export class EditSubjectComponent implements OnInit {

  editSubjectForm: FormGroup;
  editing: boolean = false;

  aw: string[] = [
    'Accept',
    'Deny',
    'Not Existed Before'
  ]
  constructor( private formBuilder: FormBuilder, private service: SubjectService, public dialogRef: MatDialogRef<EditSubjectComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any ) { 
    this.editSubjectForm = formBuilder.group({
      'department' : [null],
      'subjectName' : [null, Validators.required],
      'subjectCode': [null, Validators.required],
      'subjectC' : [null, Validators.required],
      'acceptingWorks' : [null, Validators.required],
      'clientNameBooksComment' : [null],
      'comment': [null],
      'id': [null]
    });
  }

  ngOnInit() {
    //this.editSubjectForm.controls['department'].setValue(this.data);
    console.log(this.data);
    this.editSubjectForm.setValue(this.data.subject);
  }

  editSubject(subject){
    this.editing = true;
    this.service.updateSubject(subject).then(data=>{
      console.log(data);
      this.dialogRef.close();
    })
  }

}
