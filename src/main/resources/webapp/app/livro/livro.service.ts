import { Injectable } from '@angular/core';
import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { LivroComponent } from './livro.component';
import { LivroCadastroComponent } from './cadastro/livro.cadastro.component';
import { FotoComponent } from '../foto/foto.component';
import { UsuarioComponent } from '../usuario/usuario.component';

@Injectable()
export class LivroService {

    usuario: UsuarioComponent;
    headers: Headers;
    headerFormData: Headers;
    constructor(private http: Http){
        this.headers = new Headers();
        this.headerFormData = new Headers();
        this.headers.append("Content-Type", "application/json");
        this.headerFormData.set('Accept', 'application/json');
    }  

    salvaLivro(livro: LivroComponent, id: string): Observable<Response>{ 
        console.log('salvando livro');
        return this.http
            .post('/api/livro/' + id, JSON.stringify(livro), { headers: this.headers });
    }

    atualizaLivro(livro: LivroComponent): Observable<Response> {
        
        return this.http
            .put('/api/livro/' + livro.id, JSON.stringify(livro), { headers: this.headers });
    }

    salvaFoto(idRes: string, formData: FormData): XMLHttpRequest {
        console.log("salvando foto")
        let url: string = "/api/livro/foto/";
        let xhr: XMLHttpRequest = new XMLHttpRequest();
        xhr.open('POST' , url + idRes, true);

        xhr.setRequestHeader('enctype', 'multipart/form-data');
        
        xhr.setRequestHeader("Cache-Control", "no-cache");
        xhr.setRequestHeader("Cache-Control", "no-store");
        xhr.setRequestHeader("Pragma", "no-cache"); 

        xhr.send(formData);
        
        return xhr;
    }

    getLivros(id: string): Observable<LivroComponent[]> {
        return this.http.get('/api/livros/' + id, { headers: this.headers })
                        .map(this.extractData);
    }

    getLivroPorId(id: string): Observable<Response> {
        return this.http.get('/api/livro/'+id, { headers: this.headers });
    }

    configuraImagemParaExibicao(arrayBuffer: any){
        let base64    = ''
        let encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

        let bytes         = new Uint8Array(arrayBuffer)
        let byteLength    = bytes.byteLength
        let byteRemainder = byteLength % 3
        let mainLength    = byteLength - byteRemainder

        let a: any; 
        let b: any;
        let c: any;
        let d: any;
        let chunk: any;

        // Main loop deals with bytes in chunks of 3
        for (let i = 0; i < mainLength; i = i + 3) {
            // Combine the three bytes into a single integer
            chunk = (bytes[i] << 16) | (bytes[i + 1] << 8) | bytes[i + 2]

            // Use bitmasks to extract 6-bit segments from the triplet
            a = (chunk & 16515072) >> 18 // 16515072 = (2^6 - 1) << 18
            b = (chunk & 258048)   >> 12 // 258048   = (2^6 - 1) << 12
            c = (chunk & 4032)     >>  6 // 4032     = (2^6 - 1) << 6
            d = chunk & 63               // 63       = 2^6 - 1

            // Convert the raw binary segments to the appropriate ASCII encoding
            base64 += encodings[a] + encodings[b] + encodings[c] + encodings[d]
        }

        // Deal with the remaining bytes and padding
        if (byteRemainder == 1) {
            chunk = bytes[mainLength]

            a = (chunk & 252) >> 2 // 252 = (2^6 - 1) << 2

            // Set the 4 least significant bits to zero
            b = (chunk & 3)   << 4 // 3   = 2^2 - 1

            base64 += encodings[a] + encodings[b] + '=='
        } else if (byteRemainder == 2) {
            chunk = (bytes[mainLength] << 8) | bytes[mainLength + 1]

            a = (chunk & 64512) >> 10 // 64512 = (2^6 - 1) << 10
            b = (chunk & 1008)  >>  4 // 1008  = (2^6 - 1) << 4

            // Set the 2 least significant bits to zero
            c = (chunk & 15)    <<  2 // 15    = 2^4 - 1

            base64 += encodings[a] + encodings[b] + encodings[c] + '='
        }

        return 'data:image/png;base64,' + base64;
    }

    private extractData(response: Response){
        let body = response.json();
        return body || {  };
    }

}