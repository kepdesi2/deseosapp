import { Pipe, PipeTransform } from "@angular/core";
import { Lista } from "../clases";


@Pipe({
    name:'pendientes',
    pure:false
})
export class PendientesPipe implements PipeTransform{
    transform(listas:Lista[], estado:boolean = false):Lista[]{
        let nuevalista:Lista[]= [];
        for ( let lista of listas){
            if (lista.terminada == estado) {
                nuevalista.push(lista)
            }
        }
        return nuevalista
    }
}