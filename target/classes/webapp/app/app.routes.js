"use strict";
var router_1 = require('@angular/router');
var home_component_1 = require('./home/home.component');
var feed_component_1 = require('./feed/feed.component');
var login_component_1 = require('./login/login.component');
var auth_guards_1 = require('./_guards/auth.guards');
var usuario_cadastro_component_1 = require('./usuario/cadastro/usuario.cadastro.component');
var appRoutes = [
    {
        path: '',
        component: login_component_1.LoginComponent,
        canActivate: [auth_guards_1.AuthGuard],
        children: [
            { path: 'feed', component: feed_component_1.FeedComponent },
        ]
    },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'cadastro', component: usuario_cadastro_component_1.UsuarioCadastroComponent },
    { path: '**', component: home_component_1.HomeComponent }
];
exports.routing = router_1.RouterModule.forRoot(appRoutes);
//# sourceMappingURL=app.routes.js.map