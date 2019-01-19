import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewTextbookComponent } from './view-textbook.component';

describe('ViewTextbookComponent', () => {
  let component: ViewTextbookComponent;
  let fixture: ComponentFixture<ViewTextbookComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewTextbookComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewTextbookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
