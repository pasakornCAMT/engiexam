import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginPanelComponent } from './login/login-panel/login-panel.component';
import { NavBarComponent } from './shared/nav-bar/nav-bar.component';
import { LoginFormComponent } from './login/login-form/login-form.component';
import { HomePanelComponent } from './home/home-panel/home-panel.component';

const componentList = [
  LoginPanelComponent,
  LoginFormComponent,
  HomePanelComponent
]

@NgModule({
  declarations: [componentList],
  exports: [componentList],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class ComponentsModule { }
