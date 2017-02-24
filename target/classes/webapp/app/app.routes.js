"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var feed_component_1 = require('./feed/feed.component');
var livro_cadastro_component_1 = require('./livro/cadastro/livro.cadastro.component');
var livro_listagem_component_1 = require('./livro/listagem/livro.listagem.component');
var login_component_1 = require('./login/login.component');
var auth_guards_1 = require('./_guards/auth.guards');
var usuario_cadastro_component_1 = require('./usuario/cadastro/usuario.cadastro.component');
var appRoutes = [
    {
        path: '',
        component: home_component_1.HomeComponent,
        canActivate: [auth_guards_1.AuthGuard],
        children: [
            { path: 'feed', component: feed_component_1.FeedComponent },
            { path: 'novo-livro', component: livro_cadastro_component_1.LivroCadastroComponent },
            { path: 'meus-livros', component: livro_listagem_component_1.LivroListagemComponent },
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cadastro', component: usuario_cadastro_component_1.UsuarioCadastroComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map