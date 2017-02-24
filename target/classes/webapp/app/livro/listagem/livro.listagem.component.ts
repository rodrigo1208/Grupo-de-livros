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

    constructor(private router: Router, private service: LivroService, private uService: UsuarioService){ 
        this.livros = new Array<LivroComponent>();
        this.pesquisaLivros();
    }

    ngOnInit(){

    }

    goToEdicao(livro: LivroComponent){
        this.router.navigate(['/novo-livro', JSON.stringify(livro.id)]);
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
        this.router.navigate(['/novo-livro', 0]);
    }

    converteFoto(livros: Array<LivroComponent>){
        livros.forEach(item => {
            item.foto.imagem = this.service.configuraImagemParaExibicao(item.foto.imagem);
        })
    }

}