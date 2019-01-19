import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubjectComponent } from './components/subjects/add-subject/add-subject.component';
import { ViewSubjectsComponent } from './components/subjects/view-subjects/view-subjects.component';
import { AddTextbookComponent } from './components/textbooks/add-textbook/add-textbook.component';
import { ViewTextbookComponent } from './components/textbooks/view-textbook/view-textbook.component';



const routes: Routes = [
  {
    path: 'addSubject',
    pathMatch: 'full',
    component: AddSubjectComponent,
  },
  {
    path: 'viewSubjects',
    pathMatch: 'full',
    component: ViewSubjectsComponent,
  },
  {
    path: 'addTextbook',
    pathMatch: 'full',
    component: AddTextbookComponent,
  },
  {
    path: 'viewTextbook',
    pathMatch: 'full',
    component: ViewTextbookComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
