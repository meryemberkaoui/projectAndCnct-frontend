import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-auth-dialog',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './auth-dialog.component.html',
})
export class AuthDialogComponent {

  @Input() open = false;
  @Output() openChange = new EventEmitter<boolean>();

  activeTab: 'login' | 'signup' = 'login';
  loginForm: FormGroup;
  signupForm: FormGroup;
  isLoading = false;

  constructor(private fb: FormBuilder) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      remember: [false],
    });

    this.signupForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      confirm: ['', Validators.required],
      accept: [false, Validators.requiredTrue],
    });
  }

  close() {
    this.open = false;
    this.openChange.emit(false);
  }


  setTab(tab: 'login' | 'signup') {
    this.activeTab = tab;
  }

  handleLogin() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      alert('Login OK');
      this.close();
    }, 1000);
  }

  handleSignup() {
    this.isLoading = true;
    setTimeout(() => {
      this.isLoading = false;
      alert('Signup OK');
      this.close();
    }, 1000);
  }

  handleSocialLogin(provider: string) {
    alert('Login avec ' + provider);
  }
}
