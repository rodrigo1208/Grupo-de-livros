import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario.component';
import { UsuarioCadastroComponent } from './cadastro/usuario.cadastro.component';
import { UsuarioService } from './usuario.service';

@NgModule({
    imports: [ FormsModule, ReactiveFormsModule ],
    declarations: [ UsuarioComponent, UsuarioCadastroComponent ],
    exports: [ UsuarioComponent, UsuarioCadastroComponent ],
    providers: [ UsuarioService ]
})
export class UsuarioModule{ }