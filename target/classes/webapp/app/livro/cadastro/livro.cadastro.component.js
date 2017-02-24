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
var router_1 = require('@angular/router');
var foto_component_1 = require('../../foto/foto.component');
var livro_component_1 = require('../livro.component');
var usuario_service_1 = require('../../usuario/usuario.service');
var livro_service_1 = require('../livro.service');
var LivroCadastroComponent = (function () {
    function LivroCadastroComponent(service, uService, fb, router) {
        this.service = service;
        this.uService = uService;
        this.fb = fb;
        this.router = router;
        this.imgShow = false;
        this.foto = new foto_component_1.FotoComponent();
        this.livro = new livro_component_1.LivroComponent();
        this.cadastroForm = fb.group({
            imagem: [''],
            titulo: [''],
            autor: [''],
            paginas: [''],
            categoria: ['']
        });
    }
    LivroCadastroComponent.prototype.salva = function () {
        var _this = this;
        this.uService.getIdUsuarioLogado()
            .subscribe(function (res) {
            _this.service.salvaLivro(_this.livro, res.json())
                .subscribe(function (res) {
                var xhr = _this.service.salvaFoto(res.json(), _this.formData);
                xhr.onreadystatechange = function () {
                    if (xhr.readyState === 4) {
                        if (xhr.status == 200 && xhr.status < 300) {
                            console.log('Salvo com sucesso!' + xhr.responseText);
                            _this.livro = new livro_component_1.LivroComponent();
                            _this.foto = new foto_component_1.FotoComponent();
                        }
                    }
                };
            }, function (error) { return console.log(error); });
        }, function (error) { return console.log(error); });
    };
    LivroCadastroComponent.prototype.cancela = function () {
        this.router.navigate(['/meus-livros']);
    };
    LivroCadastroComponent.prototype.onFileChange = function (event) {
        var _this = this;
        var file = event.target.files[0];
        var reader = new FileReader();
        reader.onload = function (e) {
            _this.foto.imagem = e.target.result;
            _this.foto.nomeImagem = file.name;
        };
        this.imgShow = true;
        this.formData = new FormData();
        this.formData.append('imagem', file);
        reader.readAsDataURL(file);
    };
    LivroCadastroComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'livro-cadastro',
            templateUrl: './livro.cadastro.component.html'
        }), 
        __metadata('design:paramtypes', [livro_service_1.LivroService, usuario_service_1.UsuarioService, forms_1.FormBuilder, router_1.Router])
    ], LivroCadastroComponent);
    return LivroCadastroComponent;
}());
exports.LivroCadastroComponent = LivroCadastroComponent;
//# sourceMappingURL=livro.cadastro.component.js.map