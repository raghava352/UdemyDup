import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ArchivedComponent } from './archived/archived.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { CoursesCenterComponent } from './courses-center/courses-center.component';
import { AdminCenterComponent } from './admin-center/admin-center.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { EditCourseComponent } from './edit-course/edit-course.component';
import { SettingsComponent } from './settings/settings.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
//import {APP_BASE_HREF} from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CollectionsComponent,
    WishlistComponent,
    ArchivedComponent,
    HomeComponent,
    ErrorComponent,
    CoursesCenterComponent,
    AdminCenterComponent,
    AddCourseComponent,
    EditCourseComponent,
    SettingsComponent,
    AdminheaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
