"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var http_1 = require('@angular/http');
var core_1 = require('@angular/core');
require('rxjs/Rx');
var UsuarioService = (function () {
    function UsuarioService(http) {
        this.url = "/api/usuario/";
        this.http = http;
        this.headers = new http_1.Headers();
        this.headers.append('Content-Type', 'application/json');
    }
    UsuarioService.prototype.salva = function (usuario) {
        return this.http
            .post(this.url, JSON.stringify(usuario), { headers: this.headers });
    };
    UsuarioService.prototype.getIdUsuarioLogado = function () {
        return this.http
            .post(this.url + 'getId/', localStorage.getItem('currentUser'), { headers: this.headers });
    };
    UsuarioService.prototype.authUsuario = function (login, senha) {
        var params = new http_1.URLSearchParams();
        params.set('login', login);
        params.set('senha', senha);
        return this.http
            .post('/api/auth_login', JSON.stringify({ login: login, senha: senha }), { headers: this.headers })
            .map(function (response) {
            console.log(response);
            var usuario = response.json();
            console.log(usuario);
            if (usuario != null) {
                localStorage.setItem('currentUser', JSON.stringify(usuario));
                console.log(localStorage.getItem('currentUser'));
            }
        });
    };
    UsuarioService.prototype.logOut = function () {
        localStorage.removeItem('currentUser');
    };
    UsuarioService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], UsuarioService);
    return UsuarioService;
}());
exports.UsuarioService = UsuarioService;
//# sourceMappingURL=usuario.service.js.map