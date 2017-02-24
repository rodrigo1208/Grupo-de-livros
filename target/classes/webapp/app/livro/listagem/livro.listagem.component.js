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
    function LivroListagemComponent(routes, service, uService) {
        this.routes = routes;
        this.service = service;
        this.uService = uService;
        this.semLivros = true;
        this.livros = new Array();
        this.pesquisaLivros();
    }
    LivroListagemComponent.prototype.ngOnInit = function () {
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
        this.routes.navigate(['/novo-livro']);
    };
    LivroListagemComponent.prototype.converteFoto = function (livros) {
        var _this = this;
        livros.forEach(function (item) {
            item.foto.imagem = 'data:image/png;base64,' + _this.base64ArrayBuffer(item.foto.imagem);
        });
    };
    LivroListagemComponent.prototype.base64ArrayBuffer = function (arrayBuffer) {
        var base64 = '';
        var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/';
        var bytes = new Uint8Array(arrayBuffer);
        var byteLength = bytes.byteLength;
        var byteRemainder = byteLength % 3;
        var mainLength = byteLength - byteRemainder;
        var a;
        var b;
        var c;
        var d;
        var chunk;
        // Main loop deals with bytes in chunks of 3
        for (var i = 0; i < mainLength; i = i + 3) {
            // Combine the three bytes into a single integer
            chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2];
            // Use bitmasks to extract 6-bit segments from the triplet
            a = (chunk & 16515072) >> 18; // 16515072 = (2^6 - 1) << 18
            b = (chunk & 258048) >> 12; // 258048   = (2^6 - 1) << 12
            c = (chunk & 4032) >> 6; // 4032     = (2^6 - 1) << 6
            d = chunk & 63; // 63       = 2^6 - 1
            // Convert the raw binary segments to the appropriate ASCII encoding
            base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d];
        }
        // Deal with the remaining bytes and padding
        if (byteRemainder == 1) {
            chunk = bytes[mainLength];
            a = (chunk & 252) >> 2; // 252 = (2^6 - 1) << 2
            // Set the 4 least significant bits to zero
            b = (chunk & 3) << 4; // 3   = 2^2 - 1
            base64 += encodings[a] + encodings[b] + '==';
        }
        else if (byteRemainder == 2) {
            chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1];
            a = (chunk & 64512) >> 10; // 64512 = (2^6 - 1) << 10
            b = (chunk & 1008) >> 4; // 1008  = (2^6 - 1) << 4
            // Set the 2 least significant bits to zero
            c = (chunk & 15) << 2; // 15    = 2^4 - 1
            base64 += encodings[a] + encodings[b] + encodings[c] + '=';
        }
        return base64;
    };
    LivroListagemComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'livro-listagem',
            templateUrl: './livro.listagem.component.html'
        }), 
        __metadata('design:paramtypes', [router_1.Router, livro_service_1.LivroService, usuario_service_1.UsuarioService])
    ], LivroListagemComponent);
    return LivroListagemComponent;
}());
exports.LivroListagemComponent = LivroListagemComponent;
//# sourceMappingURL=livro.listagem.component.js.map