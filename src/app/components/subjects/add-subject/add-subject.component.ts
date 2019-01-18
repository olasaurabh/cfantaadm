import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Subject } from '../../../models/subjects';
import { SubjectService } from '../../../services/subject.service';


@Component({
  selector: 'app-add-subject',
  templateUrl: './add-subject.component.html',
  styleUrls: ['./add-subject.component.css']
})
export class AddSubjectComponent implements OnInit {

  addSubjectForm: FormGroup;

  aw: string[] = [
    'Accept',
    'Deny',
    'Not Existed Before'
  ]

  subject: Subject;

  constructor( private formBuilder: FormBuilder, private service: SubjectService ) { 
    this.addSubjectForm = formBuilder.group({
      'department' : [null],
      'subjectName' : [null, Validators.required],
      'subjectCode': [null, Validators.required],
      'subjectC' : [null, Validators.required],
      'acceptingWorks' : [null, Validators.required],
      'clientNameBooksComment' : [null],
      'comment': [null]
    });
  }

  ngOnInit() {
  }

  addSubject(value){
    console.log('abcd');
    this.subject = value;
    console.log(this.subject);
    if(this.addSubjectForm.valid){
      this.service.addSubject(value).then(data =>{
        console.log(data);
        console.log('chala');
      })
    }
  }


}
