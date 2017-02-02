import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guards';
import { UsuarioCadastroComponent } from './usuario/cadastro/usuario.cadastro.component';

const appRoutes: Routes = [
    { 
        path: '',
        component: LoginComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'feed', component: FeedComponent },
        ]
    },
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: UsuarioCadastroComponent }
    { path: '**', component: HomeComponent}
];  

export const routing = RouterModule.forRoot(appRoutes);