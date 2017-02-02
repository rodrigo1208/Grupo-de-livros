import { Component, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'livro',
    templateUrl: './livro.component.html'
})
export class LivroComponent{

    @Input() titulo: string;
    @Input() url: string;
    @Input() autor: string;
    @Input() paginas: String;
    @Input() categoria: string;
    @Input() nota: number;
    avaliacoes: Array<string>
    
}