import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { ListaDeseosService } from '../../app/services/lista-deseos.service';
import { AgregarComponent } from '../agregar/agregar.component';
import { DetalleComponent } from '../detalle/detalle.component';

@Component({
  selector: 'app-pendientes',
  templateUrl: 'pendientes.component.html'
})
export class PendientesComponent {

  constructor(private _listaDeseos: ListaDeseosService, private navCtrl:NavController) {

  }

  irAgregar(){
    this.navCtrl.push(AgregarComponent)
  }

  verDetalle(lista, idx){
    this.navCtrl.push(DetalleComponent, {lista,idx});
  }

}
