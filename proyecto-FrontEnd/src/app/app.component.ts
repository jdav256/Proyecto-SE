import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuariosService } from './services/usuarios.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'proyecto';
  constructor(private router: Router,private usuarioService:UsuariosService){
    if(usuarioService.isLoggedIn()){
      console.log("hay un usuario Logeado");
      if(usuarioService.getTipoUsuario()=='Cliente'){
        router.navigate(['cliente']);
      }
    }else{
      
      router.navigate(['']);
    };
  } 
  logUsuario(evento){
    console.log(evento);
    if(this.usuarioService.isLoggedIn()){
      console.log("hay un usuario Logeado");
      if(this.usuarioService.getTipoUsuario()=='Cliente'){
        this.router.navigate(['cliente']);
      }
    }else{
      
      this.router.navigate(['']);
    };
  }
}
