import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddSubjectComponent } from './components/subjects/add-subject/add-subject.component';
import { ViewSubjectsComponent } from './components/subjects/view-subjects/view-subjects.component';



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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
