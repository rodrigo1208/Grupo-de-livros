import { Http, Headers, Response, URLSearchParams } from '@angular/http';
import { Observable } from 'rxjs';
import { UsuarioComponent } from './usuario.component';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class UsuarioService{

    http: Http;
    headers: Headers;
    url: string = "/api/usuario/";

    constructor(http: Http){
        this.http = http;
        this.headers = new Headers();
        this.headers.append('Content-Type', 'application/json');
    }

    salva(usuario: UsuarioComponent): Observable<Response> {
        return this.http
            .post(this.url , JSON.stringify(usuario), { headers: this.headers });
    }

    getIdUsuarioLogado(){
        return this.http
            .post(this.url + 'getId/', localStorage.getItem('currentUser'), { headers: this.headers });
    }

    authUsuario(login: string, senha: string){
        let params = new URLSearchParams();
        params.set('login', login);
        params.set('senha', senha);

        return this.http
            .post('/api/auth_login', JSON.stringify({ login, senha }) ,{ headers: this.headers })
            .map((response: Response) =>{
                console.log(response)
                let usuario = response.json();
                console.log(usuario);
                if(usuario != null){
                    localStorage.setItem('currentUser', JSON.stringify(usuario));
                    console.log(localStorage.getItem('currentUser'));
                }
            });
    }

    logOut(){
        localStorage.removeItem('currentUser');
    }

}