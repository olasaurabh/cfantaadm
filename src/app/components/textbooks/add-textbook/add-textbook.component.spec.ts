import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTextbookComponent } from './add-textbook.component';

describe('AddTextbookComponent', () => {
  let component: AddTextbookComponent;
  let fixture: ComponentFixture<AddTextbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTextbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
