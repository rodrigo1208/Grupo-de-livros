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
var livro_component_1 = require('../livro/livro.component');
var FeedComponent = (function () {
    function FeedComponent() {
        this.livro = new livro_component_1.LivroComponent();
        this.livro.autor = 'Frank Herbert';
        this.livro.url = 'http://www.pontozero.net.br/wp-content/uploads/2013/08/duna-capa.jpg';
        this.livro.titulo = 'Duna';
        this.livro.paginas = '180';
        this.livro.categoria = 'ficção-cientifica';
        this.livro.nota = 10;
    }
    FeedComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'feed',
            templateUrl: './feed.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], FeedComponent);
    return FeedComponent;
}());
exports.FeedComponent = FeedComponent;
//# sourceMappingURL=feed.component.js.map