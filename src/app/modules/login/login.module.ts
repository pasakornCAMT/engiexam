import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';
import { ComponentsModule } from 'src/app/components/components.module';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  }
];


@NgModule({
  imports: [
    CommonModule,
    ComponentsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [LoginComponent],
})
export class LoginModule { }
