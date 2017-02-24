import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { FotoComponent } from '../foto/foto.component';

@Component({
    moduleId: module.id,
    selector: 'livro',
    templateUrl: './livro.component.html'
})
export class LivroComponent{
             id: Object;
    @Input() titulo: string;
    @Input() url: string;
    @Input() autor: string;
    @Input() paginas: String;
    @Input() categoria: string;
    @Input() nota: number;
    avaliacoes: Array<string>;

    foto: FotoComponent;

    constructor(){
        this.foto = new FotoComponent();
    }


}