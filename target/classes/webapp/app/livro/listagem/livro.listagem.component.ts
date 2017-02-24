import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import 'rxjs/add/operator/map';
import { LivroCadastroComponent } from '../cadastro/livro.cadastro.component';
import { UsuarioComponent } from '../../usuario/usuario.component';
import { UsuarioService } from '../../usuario/usuario.service';
import { LivroService } from '../livro.service';
import { LivroComponent } from '../livro.component';

@Component({
    moduleId: module.id,
    selector: 'livro-listagem',
    templateUrl: './livro.listagem.component.html'
})
export class LivroListagemComponent implements OnInit{

    usuario: UsuarioComponent;
    livros: Array<LivroComponent>
    semLivros: boolean = true;

    constructor(private routes: Router, private service: LivroService, private uService: UsuarioService){ 
        this.livros = new Array<LivroComponent>();
        this.pesquisaLivros();
    }

    ngOnInit(){

    }   

    mostraMensagens(){
        if(this.livros.length > 0 ){
            this.semLivros = false;
        }
    }

    pesquisaLivros() {
        
        this.uService.getIdUsuarioLogado()
            .subscribe(resId=>{
                this.service.getLivros(resId.json())
                    .subscribe(res => {
                        this.livros = res;
                        this.converteFoto(this.livros);
                }); 
            }, error => console.log(error));
    }

    novoLivro() {
        this.routes.navigate(['/novo-livro']);
    }

    converteFoto(livros: Array<LivroComponent>){
        livros.forEach(item => {
            item.foto.imagem = 'data:image/png;base64,' + this.base64ArrayBuffer(item.foto.imagem);
        })
    }

    base64ArrayBuffer(arrayBuffer: any) {
        var base64    = ''
        var encodings = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/'

        var bytes         = new Uint8Array(arrayBuffer)
        var byteLength    = bytes.byteLength
        var byteRemainder = byteLength % 3
        var mainLength    = byteLength - byteRemainder

        var a: any; 
        var b: any;
        var c: any;
        var d: any;
        var chunk: any;

        // Main loop deals with bytes in chunks of 3
        for (var i = 0; i < mainLength; i = i + 3) {
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

        return base64
    }
}