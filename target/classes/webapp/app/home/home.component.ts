import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router';
import { UsuarioComponent } from '../usuario/usuario.component';

@Component({
    moduleId: module.id,
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
    
    usuario: UsuarioComponent;

    constructor(private router: Router){  }

    ngOnInit(){
        this.usuario = JSON.parse(localStorage.getItem('currentUser'));
    }



    logOut(){
        localStorage.removeItem('currentUser');
        this.router.navigate(['/login']);
    }

}