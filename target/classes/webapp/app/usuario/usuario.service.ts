import { Http, Headers, Response } from '@angular/http';
import { Observable } from 'rxjs';
import { UsuarioComponent } from './usuario.component';
import { Injectable } from '@angular/core';

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
}