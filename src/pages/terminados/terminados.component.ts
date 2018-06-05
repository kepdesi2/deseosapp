import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-terminados',
  templateUrl: 'terminados.component.html'
})
export class TerminadosComponent {


  constructor(private _listaDeseos: ListaDeseosService, private navCtrl:NavController) {

  }


  verDetalle(lista, idx){
    this.navCtrl.push(DetalleComponent, {lista,idx});
  }

}
