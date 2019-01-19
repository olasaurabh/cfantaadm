import { Component, OnInit } from '@angular/core';
import { TextbookService } from '../../../services/textbook/textbook.service';
import { Textbook } from '../../../models/textbooks';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { EditTextbookComponent } from '../edit-textbook/edit-textbook.component';


@Component({
  selector: 'app-view-textbook',
  templateUrl: './view-textbook.component.html',
  styleUrls: ['./view-textbook.component.css']
})
export class ViewTextbookComponent implements OnInit {

  textbooks: Textbook[] = [];

  constructor(private service: TextbookService, public dialog: MatDialog) { }

  ngOnInit() {
    this.service.getTextbooks().subscribe(data => {
      this.textbooks = data;
    })
  }

  editTextbook(textbook){
    const dialogRef = this.dialog.open(EditTextbookComponent, {
      width: '600px',
      data: {textbook}
    });
  }
}
