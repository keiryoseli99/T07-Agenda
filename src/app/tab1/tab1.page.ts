import { Component, ViewChild } from '@angular/core';
import { IonDatetime } from '@ionic/angular';
import { format, parseISO } from 'date-fns';
import { es } from 'date-fns/locale';
import { AgendaService } from '../services/agenda.service'
import { citas } from '../services/citas';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonDatetime) datetime: IonDatetime;

  dateValue = '';
  dateValue2 = new Date(Date.now()).toISOString();

  public listaCitas: citas[] = [];
  public fecha: string;
  public nombre: string;
  public tipo: string;
  public celular: string;

  constructor(
    private agenda: AgendaService
  ) {}

  private add(){
    this.agenda.addCitaNueva(format(parseISO(this.fecha), 'PPPP', {locale: es}),this.nombre,this.tipo,this.celular);
    this.fecha = '';
    this.nombre = '';
    this.tipo = '';
    this.celular = '';
  }

  private confirm() {
    this.datetime.confirm(true);
  }
  
  private reset() {
    this.datetime.reset(new Date(Date.now()).toISOString());
    //this.datetime.cancel(true);
  }

  formatDate(value: string) {
    return format(parseISO(value), 'PPPP', {locale: es});
  }
}
