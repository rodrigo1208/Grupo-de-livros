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
var foto_component_1 = require('../foto/foto.component');
var LivroComponent = (function () {
    function LivroComponent() {
        this.foto = new foto_component_1.FotoComponent();
    }
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LivroComponent.prototype, "titulo", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LivroComponent.prototype, "url", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LivroComponent.prototype, "autor", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LivroComponent.prototype, "paginas", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', String)
    ], LivroComponent.prototype, "categoria", void 0);
    __decorate([
        core_1.Input(), 
        __metadata('design:type', Number)
    ], LivroComponent.prototype, "nota", void 0);
    LivroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'livro',
            templateUrl: './livro.component.html'
        }), 
        __metadata('design:paramtypes', [])
    ], LivroComponent);
    return LivroComponent;
}());
exports.LivroComponent = LivroComponent;
//# sourceMappingURL=livro.component.js.map