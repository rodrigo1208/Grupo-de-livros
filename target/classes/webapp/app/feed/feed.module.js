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
var feed_component_1 = require('./feed.component');
var livro_module_1 = require('../livro/livro.module');
var FeedModule = (function () {
    function FeedModule() {
    }
    FeedModule = __decorate([
        core_1.NgModule({
            imports: [livro_module_1.LivroModule],
            declarations: [feed_component_1.FeedComponent],
            exports: [feed_component_1.FeedComponent]
        }), 
        __metadata('design:paramtypes', [])
    ], FeedModule);
    return FeedModule;
}());
exports.FeedModule = FeedModule;
//# sourceMappingURL=feed.module.js.map