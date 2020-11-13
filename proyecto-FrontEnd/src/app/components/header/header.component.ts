import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  email:string;
  password:string;
  usuario:any;
  tipo='';
  @Output() usuarioEmiter = new EventEmitter();

  constructor(private modalService:NgbModal, private usuarioService:UsuariosService) { }

  ngOnInit(): void {
     if(this.usuarioService.isLoggedIn){
       this.usuario = this.usuarioService.getLocalUser();
     };
  }

  abrirModal(idModal){
    
    this.modalService.open(
       idModal,{
        size:'xs',
        centered:false
      });
  }
  login(){
    console.log(`se logueo el usuario: ${this.email} con este password ${this.password}`);
    console.log(this.email);
    let data ={
      email:this.email,
      password:this.password
    };
    this.usuarioService.loginUsuario(data)
    .subscribe(result=>{
      console.log(result);
      localStorage.setItem('usuario',JSON.stringify(result));
      this.usuario = result;
      this.modalService.dismissAll();
      this.usuarioEmiter.emit('login');
    },error=>{
      console.log('el error es:',error);
      
    });
  }
  logout(){
    this.usuario = null;
    this.usuarioService.logout();
    this.usuarioEmiter.emit('logout');

  }

}
