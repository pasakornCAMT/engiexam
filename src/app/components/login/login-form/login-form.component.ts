import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  loginForm = new FormGroup({
    username: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private router :Router) { }

  ngOnInit() {
  }

  onSubmit(){
    console.log(this.loginForm.value);
    var form = this.loginForm.value;
    if(form.username && form.password == 'admin'){
      this.router.navigate(['/home']);
    }else{
      alert('Incorrect username or password');
    }
  }

}
