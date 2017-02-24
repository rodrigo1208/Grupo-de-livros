import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { FeedComponent } from './feed/feed.component';
import { LivroCadastroComponent } from './livro/cadastro/livro.cadastro.component';
import { LivroListagemComponent } from './livro/listagem/livro.listagem.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './_guards/auth.guards';
import { UsuarioCadastroComponent } from './usuario/cadastro/usuario.cadastro.component';

const appRoutes: Routes = [
    { 
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuard],
        children: [
            { path: 'feed', component: FeedComponent },
            { path: 'novo-livro', component: LivroCadastroComponent },
            { path: 'meus-livros', component: LivroListagemComponent},
        ]
    },
    { path: 'login', component: LoginComponent},
    { path: 'cadastro', component: UsuarioCadastroComponent },
    { path: '**', component: HomeComponent}
];  

export const routing = RouterModule.forRoot(appRoutes);