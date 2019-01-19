import { Component, OnInit, Inject } from '@angular/core';
import { SubjectService } from '../../../services/subject.service';
import { TextbookService } from '../../../services/textbook/textbook.service';
import { Subject } from '../../../models/subjects';
import { Observable } from 'node_modules/rxjs';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms'; import { startWith, map } from 'node_modules/rxjs/operators';
import { Textbook } from '../../../models/textbooks';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { checkAndUpdateTextDynamic } from '../../../../../node_modules/@angular/core/src/view/text';

@Component({
  selector: 'app-edit-textbook',
  templateUrl: './edit-textbook.component.html',
  styleUrls: ['./edit-textbook.component.css']
})
export class EditTextbookComponent implements OnInit {

  editing: boolean = true;
  subjects: Subject[] = [];
  filteredStates: Observable<Subject[]>;
  subjectControl = new FormControl();
  editTextbookForm: FormGroup;
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

  constructor(private subjectService: SubjectService, private textbookService: TextbookService, private formBuilder: FormBuilder, public dialogRef: MatDialogRef<EditTextbookComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { 
    this.filteredStates = this.subjectControl.valueChanges
      .pipe(
        startWith(''),
        map(state => state ? this._filterStates(state) : this.subjects.slice())
      );

    this.editTextbookForm = this.formBuilder.group({
      'textbookFullName' : [null, Validators.required],
      'authorName' : [null, Validators.required],
      'addedDate' : [null],
      'tE' : [null],
      'sM' : [null],
      'contents' : [null],
      'appendix' : [null],
      'textbookCode' : [null, Validators.required],
      'available' : [null, Validators.required],
      'comment' : [null],
      'codeDone' : [null],
      'publication' : [null],
      'subjectName': [null],
      'id': [null]
      
    })
  }

  ngOnInit() {
    
    this.subjectService.getSubjects().subscribe(data => {
      this.subjects = data;
      console.log(data);
      this.editing = false;
      this.editTextbookForm.setValue(this.data.textbook);
      this.subjectControl.setValue(this.data.textbook.subjectName);
    })
  }

  private _filterStates(value: string): Subject[] {
    const filterValue = value.toLowerCase();

    return this.subjects.filter(option => option.subjectName.toLowerCase().indexOf(filterValue) === 0);
  }

  editTextbook(textbook){
    this.editing = true;
    textbook.subjectName = this.subjectControl.value;
    this.textbookService.updateTextbook(textbook).then(data => {
      this.dialogRef.close();
    })
  }

}
