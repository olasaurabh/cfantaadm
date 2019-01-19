import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTextbookComponent } from './edit-textbook.component';

describe('EditTextbookComponent', () => {
  let component: EditTextbookComponent;
  let fixture: ComponentFixture<EditTextbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditTextbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
