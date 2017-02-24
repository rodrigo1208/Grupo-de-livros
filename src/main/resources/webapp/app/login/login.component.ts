import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from '../usuario/usuario.service';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit{
    

    login: string;
    senha: string;

    returnUrl: string;
    
    constructor(
        private router: Router,
        private service: UsuarioService,
        private route: ActivatedRoute){ }

    ngOnInit(){
        this.service.logOut();
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    authUsuario(){
        this.service.authUsuario(this.login, this.senha)
            .subscribe(res => {
                this.router.navigate([this.returnUrl]);
            }, error => console.log(error));
    }
    
    goToCadastro(){
        this.router.navigate(['/cadastro']);
    }

}