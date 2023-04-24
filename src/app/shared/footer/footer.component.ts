import { Component } from '@angular/core';
import { InforPaginaService } from 'src/app/services/infor-pagina.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  anio: number = new Date().getFullYear();

  constructor( public _servicioDatos:InforPaginaService){}

}
