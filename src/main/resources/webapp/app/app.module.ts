import { NgModule }      from '@angular/core';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
//imports próprios do app
import { routing } from './app.routes';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { LoginModule } from './login/login.module';
import { AppComponent }  from './app.component';
import { FotoModule } from './foto/foto.module';
import { LivroModule } from './livro/livro.module';
import { UsuarioModule } from './usuario/usuario.module';
import { FeedModule } from './feed/feed.module';
import { AuthGuard } from './_guards/auth.guards';

@NgModule({
  declarations: [ AppComponent, HomeComponent ],
  imports: [ 
    BrowserModule,
    HttpModule,
    routing,
    FotoModule,
    LivroModule,
    UsuarioModule,
    LoginModule,
    FeedModule,
   ],
  bootstrap:    [ AppComponent ],
  providers: [  
    AuthGuard,
    {provide: LocationStrategy, useClass: HashLocationStrategy}
  ]
})
export class AppModule { }
