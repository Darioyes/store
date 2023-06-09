import { Component } from '@angular/core';
import { InforPaginaService } from './services/infor-pagina.service';
import { ProductosService } from './services/productos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Dario Developing';

  constructor( public infoPaginaService:InforPaginaService,
              public productosService:ProductosService){
    
  }
}
