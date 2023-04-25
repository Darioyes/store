import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InforPaginaService } from 'src/app/services/infor-pagina.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  constructor( public _servicioDatos:InforPaginaService,
                private router:Router){}

  buscarProducto( termino:string ){
    if(termino.length < 1){
      return;
    }
    this.router.navigate(['/search',termino]);
    
  }

}
