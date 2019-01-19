import { Component, OnInit } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { TextbookService } from '../../../services/textbook/textbook.service';
import { Subject } from '../../../models/subjects';
import { Observable } from 'node_modules/rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; import { startWith, map } from 'node_modules/rxjs/operators';
import { Textbook } from '../../../models/textbooks';

@Component({
  selector: 'app-add-textbook',
  templateUrl: './add-textbook.component.html',
  styleUrls: ['./add-textbook.component.css']
})
export class AddTextbookComponent implements OnInit {

  editing: boolean = true;
  subjects: Subject[] = [];
  filteredStates: Observable<Subject[]>;
  subjectControl = new FormControl();
  addTextbookForm: FormGroup;
  textbook: Textbook;

  status: string[] = [
    'A(Textbook)',
    'A(SM)',
    'A(Contents/Ch. names)',
    'A(Appendix/End Tables)',
    'NA',
    'Not Doing',
    'Standard Book',
    'Special Case',
    'Regular',
    'Software',
    'Not Yet Available'
  ]

  constructor(private subjectService: SubjectService, private textbookService: TextbookService, private formBuilder: FormBuilder) {
    this.filteredStates = this.subjectControl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.subjects.slice())
      );

    this.addTextbookForm = this.formBuilder.group({
      'textbookFullName' : [null, Validators.required],
      'authorName' : [null, Validators.required],
      'addedDate' : [Date.now()],
      'tE' : [null],
      'sM' : [null],
      'contents' : [null],
      'appendix' : [null],
      'textbookCode' : [null, Validators.required],
      'available' : [null, Validators.required],
      'comment' : [null],
      'codeDone' : [null],
      'publication' : [null]
    })
  }

  ngOnInit() {
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
      console.log(data);
      this.editing = false;
    })


  }

  private _filterStates(value: string): Subject[] {
    const filterValue = value.toLowerCase();

    return this.subjects.filter(option => option.subjectName.toLowerCase().indexOf(filterValue) === 0);
  }

  addTextbook(textbook){
    this.textbook = textbook;

    console.log(textbook);
    textbook.subjectName = this.subjectControl.value;
    if(this.addTextbookForm.valid){
      this.textbookService.addTextbook(textbook).then(data=>{
        console.log(data);
      })
    }
  }

}
