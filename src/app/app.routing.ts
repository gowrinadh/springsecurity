import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './modules/home/pages/login/login.component';
import { ChatComponent } from './modules/home/pages/chat/chat.component';


const appRoutes: Routes = [
    { path: 'login', component: LoginComponent },
    { path: 'chat', component: ChatComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);