import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validator } from '@angular/forms'
import { Router, ActivatedRoute } from '@angular/router';
import { FotoComponent } from '../../foto/foto.component';
import { LivroComponent } from '../livro.component';
import { UsuarioService } from '../../usuario/usuario.service';
import { LivroService } from '../livro.service';

@Component({
    moduleId: module.id,
    selector: 'livro-cadastro',
    templateUrl: './livro.cadastro.component.html'
})
export class LivroCadastroComponent implements OnInit {

    livro: LivroComponent;
    foto: FotoComponent;
    cadastroForm: FormGroup;
    formData: FormData;
    imgShow: boolean = false;
    imgChanged: boolean = false;
    funcao: string = "Novo"

    constructor(
            private service: LivroService,
            private uService: UsuarioService,
            private fb: FormBuilder,
            private router: Router,
            private route: ActivatedRoute){
        this.livro = new LivroComponent();
        this.foto = new FotoComponent();
        this.cadastroForm = fb.group({
            imagem: [''],
            titulo: [''],
            autor: [''],
            paginas: [''],
            categoria: ['']
        });
    }

    ngOnInit(){
        this.route.params.subscribe(params => {
            if(params['id'] <= 0){
                return;
            }

            this.funcao = "Editar";
            this.service.getLivroPorId(params['id'])
                .subscribe(res => {
                    let livro: LivroComponent = res.json();
                    this.foto.imagem = this.service.configuraImagemParaExibicao(livro.foto.imagem);
                    this.foto.nomeImagem = livro.foto.nomeImagem;
                    this.livro = livro;
                    this.imgShow = true;
                }, error => console.log(error));

        });

    }

    private salva () {
        this.uService.getIdUsuarioLogado()
            .subscribe(res => {
                 this.service.salvaLivro(this.livro, res.json())
                    .subscribe(res=> {
                        let xhr = this.service.salvaFoto(res.json(), this.formData);
                        xhr.onreadystatechange = () => {
                            if(xhr.readyState === 4){
                                if(xhr.status == 200 && xhr.status < 300){
                                    console.log('Salvo com sucesso!' + xhr.responseText);
                                    this.livro = new LivroComponent();
                                    this.imgShow = false;
                                }
                            }
                        };
                    }, error => console.log(error));
            }, error => console.log(error));
    }

    private atualiza() {
        this.service
            .atualizaLivro(this.livro)
            .subscribe(res => {
                if(!this.imgChanged){
                    return;
                }
                let xhr = this.service.salvaFoto(res.json(), this.formData);
                xhr.onreadystatechange = () => {
                    if(xhr.readyState === 4){
                        if(xhr.status == 200 && xhr.status < 300){
                            console.log('Salvo com sucesso!' + xhr.responseText);
                            this.router.navigate(['meus-livros']);
                        }
                    }
                };
            }, error => console.log(error));
    }

    salvaOuAtualiza(){
        if(this.livro.id != null || this.livro.id != undefined){
            this.salva();
        } else {
            this.atualiza();
        }
    }

    cancela(){
        this.router.navigate(['/meus-livros']);
    }

    onFileChange(event: any){
        let file = event.target.files[0];
        let reader = new FileReader();
        reader.onload = (e: any) => {
            this.foto.imagem = e.target.result;
            this.foto.nomeImagem = file.name;
        };

        this.imgShow = true;
        this.imgChanged = true;
        this.formData = new FormData();
        this.formData.append('imagem', file);
        reader.readAsDataURL(file);

    }

}