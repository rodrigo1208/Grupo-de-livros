import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';

@Component({
    moduleId: module.id,
    selector: 'feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent {
    
    livro: LivroComponent;

    constructor(){
        this.livro = new LivroComponent();
        this.livro.autor = 'Frank Herbert';
        this.livro.url = 'http://www.pontozero.net.br/wp-content/uploads/2013/08/duna-capa.jpg';
        this.livro.titulo = 'Duna';
        this.livro.paginas = '180';
        this.livro.categoria = 'ficção-cientifica';
        this.livro.nota = 10;

    }

}