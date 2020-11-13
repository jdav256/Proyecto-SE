import { Component, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/services/categorias.service';
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-categoria-tiendas',
  templateUrl: './categoria-tiendas.component.html',
  styleUrls: ['./categoria-tiendas.component.css']
})
export class CategoriaTiendasComponent implements OnInit {
  faArrowLeft = faArrowLeft;


  categoriasVisibles:boolean=true;
  categoriaSeleccionada:any= {
    color:"#FFFFF",
    nombreCategoria:"",
    tiendas:[],

  };
  categorias:any=[];
  constructor( private categoriasService:CategoriasService) { }

  ngOnInit(): void {
    this.categoriasService.obtenerCategorias()
    .subscribe(result=>{
      console.log(result);
      this.categorias= result;
    },error=>{
      console.log(error);
    })
  }

  mostrarTiendas(categoria){
    this.categoriaSeleccionada = categoria;
    this.categoriasVisibles = false;
  }

  mostrarCategorias(){
    
    this.categoriasVisibles= true;
  }

}
