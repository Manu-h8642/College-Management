import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentComponent } from './student/student.component';
import { SaddEditComponent } from './student/sadd-edit/sadd-edit.component';
import { SdisplayComponent } from './student/sdisplay/sdisplay.component';
import { SharedService } from './shared.service';
import { CollageComponent } from './collage/collage.component';
import { CaddEditComponent } from './collage/cadd-edit/cadd-edit.component';
import { CdisplayComponent } from './collage/cdisplay/cdisplay.component';
import { CoursesComponent } from './courses/courses.component';
import { CourseddEditComponent } from './courses/coursedd-edit/coursedd-edit.component';
import { CoursedispComponent } from './courses/coursedisp/coursedisp.component';
import { TeacherComponent } from './teacher/teacher.component';
import { TaddEditComponent } from './teacher/tadd-edit/tadd-edit.component';
import { TdisplayComponent } from './teacher/tdisplay/tdisplay.component';

@NgModule({
  declarations: [
    AppComponent,
    StudentComponent,
    SaddEditComponent,
    SdisplayComponent,
    CollageComponent,
    CaddEditComponent,
    CdisplayComponent,
    CoursesComponent,
    CourseddEditComponent,
    CoursedispComponent,
    TeacherComponent,
    TaddEditComponent,
    TdisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [
    SharedService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
