import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { LivroComponent } from './livro.component';
import { LivroCadastroComponent } from './cadastro/livro.cadastro.component';
import { LivroListagemComponent } from './listagem/livro.listagem.component';
import { LivroService } from './livro.service';

@NgModule({
    imports: [ 
        CommonModule,
        FormsModule,
        ReactiveFormsModule
    ],
    declarations: [ 
        LivroComponent, 
        LivroCadastroComponent,
        LivroListagemComponent
    ],
    exports: [ LivroComponent ],
    providers: [ LivroService ]
})
export class LivroModule{

}