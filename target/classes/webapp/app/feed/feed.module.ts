import{ NgModule } from'@angular/core';
import { FeedComponent } from './feed.component';
import { LivroModule } from '../livro/livro.module';

@NgModule({
    imports: [ LivroModule ],
    declarations: [ FeedComponent ],
    exports: [ FeedComponent ]
})
export class FeedModule{ 

}