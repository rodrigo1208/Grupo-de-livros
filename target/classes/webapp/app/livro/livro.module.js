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
var common_1 = require('@angular/common');
var livro_component_1 = require('./livro.component');
var livro_cadastro_component_1 = require('./cadastro/livro.cadastro.component');
var livro_listagem_component_1 = require('./listagem/livro.listagem.component');
var livro_service_1 = require('./livro.service');
var LivroModule = (function () {
    function LivroModule() {
    }
    LivroModule = __decorate([
        core_1.NgModule({
            imports: [
                common_1.CommonModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule
            ],
            declarations: [
                livro_component_1.LivroComponent,
                livro_cadastro_component_1.LivroCadastroComponent,
                livro_listagem_component_1.LivroListagemComponent
            ],
            exports: [livro_component_1.LivroComponent],
            providers: [livro_service_1.LivroService]
        }), 
        __metadata('design:paramtypes', [])
    ], LivroModule);
    return LivroModule;
}());
exports.LivroModule = LivroModule;
//# sourceMappingURL=livro.module.js.map