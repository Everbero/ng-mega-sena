import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {

  authForm = this.formBuilder.group({
    username: '',
    password: ''
  });

  constructor(private authService: AuthService, private router: Router,  private formBuilder: FormBuilder,) {}

  ngOnInit(): void {
    this.checkAuth()
  }

  checkAuth(){
    if (this.authService.isAuthenticated())
      
      this.router.navigate(['']);
    
  }

  onSubmit(): void {
    this.authService.doAuth(this.authForm.value.username, this.authForm.value.password)
    // console.warn('data submitted', this.authForm.value);
    this.checkAuth();
  }
}
