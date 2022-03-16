import { Injectable } from '@angular/core';
import { citas } from './citas';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  public listaCitas: citas[] = [];
  private index: number = 0;

  constructor() {
  }

  public addCitaNueva(fecha:string, nombre:string, tipo:string, celular:string){
    let cita: citas = new citas(fecha,nombre,tipo,celular);
    cita.setId(this.index);
    this.index++;
    this.listaCitas.push(cita);
    this.listaCitas = this.listaCitas.sort();
    
    console.log(this.listaCitas);
  }

  public getListaCitas(){
    return this.listaCitas;
  }

  public removeCitas(pos:number){
    this.listaCitas.splice(pos,1);
    
    console.log(this.listaCitas);
  }
}