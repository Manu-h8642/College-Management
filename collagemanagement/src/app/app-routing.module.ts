import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import path from 'node:path';
import { StudentComponent } from './student/student.component';
import { CoursesComponent } from './courses/courses.component';
import { CollageComponent } from './collage/collage.component';
import { TeacherComponent } from './teacher/teacher.component';

const routes: Routes = [
  {path:'student',component:StudentComponent},
  {path:'course',component:CoursesComponent},
  {path:'college',component:CollageComponent},
  {path:'teacher',component:TeacherComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
