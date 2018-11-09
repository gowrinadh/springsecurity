import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from "./core/services/auth.service";
import { AlertService } from './core/services/alert.service';
import { routing } from './app.routing';
import { AlertComponent } from './shared/directives/alert/alert.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    routing
  ],
  providers: [AuthService,AlertService],
  bootstrap: [AppComponent]
})
export class AppModule { }
