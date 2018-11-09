import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/home/pages/login/login.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);