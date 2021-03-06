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
var forms_1 = require('@angular/forms');
var usuario_component_1 = require('./usuario.component');
var usuario_cadastro_component_1 = require('./cadastro/usuario.cadastro.component');
var usuario_service_1 = require('./usuario.service');
var UsuarioModule = (function () {
    function UsuarioModule() {
    }
    UsuarioModule = __decorate([
        core_1.NgModule({
            imports: [forms_1.FormsModule, forms_1.ReactiveFormsModule],
            declarations: [usuario_component_1.UsuarioComponent, usuario_cadastro_component_1.UsuarioCadastroComponent],
            exports: [usuario_component_1.UsuarioComponent, usuario_cadastro_component_1.UsuarioCadastroComponent],
            providers: [usuario_service_1.UsuarioService]
        }), 
        __metadata('design:paramtypes', [])
    ], UsuarioModule);
    return UsuarioModule;
}());
exports.UsuarioModule = UsuarioModule;
//# sourceMappingURL=usuario.module.js.map