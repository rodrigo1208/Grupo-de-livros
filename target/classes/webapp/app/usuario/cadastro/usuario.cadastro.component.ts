import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioComponent } from '../usuario.component';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuarioService } from '../usuario.service';

@Component({
    moduleId: module.id,
    selector: 'cadastro-usuario',
    templateUrl: './usuario.cadastro.component.html'
})
export class UsuarioCadastroComponent{

    usuario: UsuarioComponent;
    service: UsuarioService;
    resenha: string;
    cadastroForm: FormGroup;
    router: Router;

    constructor(fb: FormBuilder, service: UsuarioService, router: Router){
        this.router = router;
        this.service = service;

        this.usuario = new UsuarioComponent();

        this.cadastroForm = fb.group({
            nome: [''],
            sobrenome: [''],
            login: [''],
            senha: [''],
            resenha: ['']
        });
    }

    salva(){
        if(this.usuario.senha != this.resenha){
            return;
        }
        this.service
            .salva(this.usuario)
            .subscribe(res => {
                console.log("Contato salvo com sucesso =>", this.usuario);
                this.router.navigate(['/login']);
            }, error => console.log(error));
    }

    cancela() {
        this.router.navigate(['/']);
    }

}