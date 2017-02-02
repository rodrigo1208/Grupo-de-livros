import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    moduleId: module.id,
    selector: 'login',
    templateUrl: './login.component.html'
})
export class LoginComponent{
    
    constructor(private router: Router){

    }
    
    goToCadastro(){
        this.router.navigate(['/cadastro']);
    }

}