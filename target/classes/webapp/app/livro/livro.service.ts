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
        let idRes: string;
        console.log('salvando livro');
        return this.http
            .post('/api/livro/' + id, JSON.stringify(livro), { headers: this.headers });
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

    private extractData(response: Response){
        let body = response.json();
        return body || {  };
    }

}