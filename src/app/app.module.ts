import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthService } from "./core/services/auth.service";
import { AlertService } from './core/services/alert.service';
import { routing } from './app.routing';
import { AlertComponent } from './shared/directives/alert/alert.component';
import { ChatComponent } from './modules/home/pages/chat/chat.component';
import { HttpService } from './core/services/http.service';
 import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    ChatComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    FormsModule,
    routing
  ],
  providers: [AuthService,AlertService,HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
