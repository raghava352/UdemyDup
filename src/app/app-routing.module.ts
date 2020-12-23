import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { CoursesComponent } from './courses/courses.component';
import { CollectionsComponent } from './collections/collections.component';
import { WishlistComponent } from './wishlist/wishlist.component';
import { ArchivedComponent } from './archived/archived.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import {APP_BASE_HREF} from '@angular/common';
import { CoursesCenterComponent } from './courses-center/courses-center.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },

  { path: 'home/mycourses', component: CoursesCenterComponent,
      children: [
        { path: 'courses', component: CoursesComponent },
        { path: 'collections', component: CollectionsComponent },
        { path: 'wishlist', component: WishlistComponent },
        { path: 'archived', component: ArchivedComponent }, 
      ]
  },


  { path: '', redirectTo: '/home/mycourses', pathMatch: 'full' },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ enableTracing: true })],
  exports: [RouterModule],
 //providers: [{provide: APP_BASE_HREF, useValue: '/home/mycourses'}], 
  providers: []
})
export class AppRoutingModule { }
