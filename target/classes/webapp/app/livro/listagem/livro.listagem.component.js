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
require('rxjs/add/operator/map');
var usuario_service_1 = require('../../usuario/usuario.service');
var livro_service_1 = require('../livro.service');
var LivroListagemComponent = (function () {
    function LivroListagemComponent(router, service, uService) {
        this.router = router;
        this.service = service;
        this.uService = uService;
        this.semLivros = true;
        this.livros = new Array();
        this.pesquisaLivros();
    }
    LivroListagemComponent.prototype.ngOnInit = function () {
    };
    LivroListagemComponent.prototype.goToEdicao = function (livro) {
        this.router.navigate(['/novo-livro', JSON.stringify(livro.id)]);
    };
    LivroListagemComponent.prototype.mostraMensagens = function () {
        if (this.livros.length > 0) {
            this.semLivros = false;
        }
    };
    LivroListagemComponent.prototype.pesquisaLivros = function () {
        var _this = this;
        this.uService.getIdUsuarioLogado()
            .subscribe(function (resId) {
            _this.service.getLivros(resId.json())
                .subscribe(function (res) {
                _this.livros = res;
                _this.converteFoto(_this.livros);
            });
        }, function (error) { return console.log(error); });
    };
    LivroListagemComponent.prototype.novoLivro = function () {
        this.router.navigate(['/novo-livro', 0]);
    };
    LivroListagemComponent.prototype.converteFoto = function (livros) {
        var _this = this;
        livros.forEach(function (item) {
            item.foto.imagem = _this.service.configuraImagemParaExibicao(item.foto.imagem);
        });
    };
    LivroListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'livro-listagem',
            templateUrl: './livro.listagem.component.html',
            styleUrls: ['./livro.listagem.component.css']
        }), 
        __metadata('design:paramtypes', [router_1.Router, livro_service_1.LivroService, usuario_service_1.UsuarioService])
    ], LivroListagemComponent);
    return LivroListagemComponent;
}());
exports.LivroListagemComponent = LivroListagemComponent;
//# sourceMappingURL=livro.listagem.component.js.map