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
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var usuario_component_1 = require('../usuario.component');
var forms_1 = require('@angular/forms');
var usuario_service_1 = require('../usuario.service');
var UsuarioCadastroComponent = (function () {
    function UsuarioCadastroComponent(fb, service, router) {
        this.router = router;
        this.service = service;
        this.usuario = new usuario_component_1.UsuarioComponent();
        this.cadastroForm = fb.group({
            nome: [''],
            sobrenome: [''],
            login: [''],
            senha: [''],
            resenha: ['']
        });
    }
    UsuarioCadastroComponent.prototype.salva = function () {
        var _this = this;
        if (this.usuario.senha != this.resenha) {
            return;
        }
        this.service
            .salva(this.usuario)
            .subscribe(function (res) {
            console.log("Contato salvo com sucesso =>", _this.usuario);
            _this.router.navigate(['/login']);
        }, function (error) { return console.log(error); });
    };
    UsuarioCadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'cadastro-usuario',
            templateUrl: './usuario.cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [forms_1.FormBuilder, usuario_service_1.UsuarioService, router_1.Router])
    ], UsuarioCadastroComponent);
    return UsuarioCadastroComponent;
}());
exports.UsuarioCadastroComponent = UsuarioCadastroComponent;
//# sourceMappingURL=usuario.cadastro.component.js.map