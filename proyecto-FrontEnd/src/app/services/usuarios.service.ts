import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private httpClient:HttpClient) { 

  }

  obtenerUsuarios():Observable<any>{
    return this.httpClient.get('http://localhost:8888/usuarios',{});
  }

  loginUsuario(data:any):Observable<any>{
    return this.httpClient.post('http://localhost:8888/usuarios/login',data);
    
  }
  getLocalUser():any{
      return JSON.parse(localStorage.getItem('usuario'));
  }
  logout(){
    return localStorage.removeItem('usuario');
  }
  isLoggedIn():boolean{
    return this.getLocalUser()!=null;
  }
  getTipoUsuario():string{
    let usuario:any = JSON.parse(localStorage.getItem('usuario'));
    console.log(usuario);
    return usuario.tipo;
  }
}
