import { Component } from '@angular/core';
import { LivroComponent } from '../livro/livro.component';

@Component({
    moduleId: module.id,
    selector: 'feed',
    templateUrl: './feed.component.html'
})
export class FeedComponent {
    
    livro: LivroComponent ;

    

}