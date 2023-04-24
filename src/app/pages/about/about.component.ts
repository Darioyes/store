import { Component } from '@angular/core';
import { InforPaginaService } from 'src/app/services/infor-pagina.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {

  constructor(public _infoEquipo: InforPaginaService){}

}
