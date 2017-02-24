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
var http_1 = require('@angular/http');
var LivroService = (function () {
    function LivroService(http) {
        this.http = http;
        this.headers = new http_1.Headers();
        this.headerFormData = new http_1.Headers();
        this.headers.append("Content-Type", "application/json");
        this.headerFormData.set('Accept', 'application/json');
    }
    LivroService.prototype.salvaLivro = function (livro, id) {
        var idRes;
        console.log('salvando livro');
        return this.http
            .post('/api/livro/' + id, JSON.stringify(livro), { headers: this.headers });
    };
    LivroService.prototype.salvaFoto = function (idRes, formData) {
        console.log("salvando foto");
        var url = "/api/livro/foto/";
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url + idRes, true);
        xhr.setRequestHeader('enctype', 'multipart/form-data');
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Cache-Control", "no-store");
        xhr.setRequestHeader("Pragma", "no-cache");
        xhr.send(formData);
        return xhr;
    };
    LivroService.prototype.getLivros = function (id) {
        return this.http.get('/api/livros/' + id, { headers: this.headers })
            .map(this.extractData);
    };
    LivroService.prototype.getLivroPorId = function (id) {
        return this.http.get('/api/livro/' + id, { headers: this.headers });
    };
    LivroService.prototype.configuraImagemParaExibicao = function (arrayBuffer) {
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
        return 'data:image/png;base64,' + base64;
    };
    LivroService.prototype.extractData = function (response) {
        var body = response.json();
        return body || {};
    };
    LivroService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], LivroService);
    return LivroService;
}());
exports.LivroService = LivroService;
//# sourceMappingURL=livro.service.js.map