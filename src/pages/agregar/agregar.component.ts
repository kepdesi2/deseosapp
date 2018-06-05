import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { ListaItem, Lista } from '../../app/clases';
import { ListaDeseosService } from '../../app/services/lista-deseos.service';


@Component({
  selector: 'app-agregar',
  templateUrl: 'agregar.component.html'
})
export class AgregarComponent {

    nombreLista:string = '';
    nombreItem:string = '';

    items:ListaItem[] = [];

  constructor(
      public _listaDeseos:ListaDeseosService,
      public alertCtrl:AlertController,
      public navCtrl:NavController
    ) {

  }

  agregar(){

      if(this.nombreItem.length==0){
        return;
      }

      let item = new ListaItem();
      item.nombre=this.nombreItem;

      this.items.push(item);

      this.nombreItem='';
  }

  eliminar(i){
    
      this.items.splice(i, 1);
  }

  guardarlista(){

    if (this.nombreLista.length==0) {

        let alert = this.alertCtrl.create({
            title: 'Nombre de la lista necesario',
            subTitle: 'El nombre de la lista es necesario!',
            buttons: ['OK']
          });
          alert.present();
        return;
    }

    let lista = new Lista( this.nombreLista);
    lista.items = this.items;

    

    //this._listaDeseos.listas.push(lista);
    this._listaDeseos.agregarLista(lista);


    this.navCtrl.pop();

  }

}

  