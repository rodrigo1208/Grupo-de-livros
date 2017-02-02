import { Component, Input } from '@angular/core'

@Component({
    moduleId: module.id,
    selector: 'usuario',
    templateUrl: './usuario.component.html'
})
export class UsuarioComponent{

    @Input() primeiroNome: string;
    @Input() sobreNome: string;
    @Input() login: string;
    @Input() senha: string;

}