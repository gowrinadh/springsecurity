import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertService } from 'src/app/core/services/alert.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;

  constructor(private formBuilder: FormBuilder,private authenticationService:AuthService,private route: ActivatedRoute,
    private router: Router,private alertService: AlertService) {
   }

  // convenience getter for easy access to form fields
  get f() {return this.loginForm.controls;}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', Validators.required],
      password: ['', Validators.required]
  });
   // reset login status
   this.authenticationService.logout();

  // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  onSubmit() {
    this.submitted = true;

    //stop here if form is invalid
    if (this.loginForm.invalid) {
        return;
    }
    this.loading = true;
    this.authenticationService.login(this.f.userName.value, this.f.password.value)
        .pipe(first())
        .subscribe(
            data => {
                this.router.navigate([this.returnUrl]);
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
}
}
