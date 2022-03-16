import { Component } from '@angular/core';
import { AgendaService } from '../services/agenda.service'
import { citas } from '../services/citas';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public lista: citas[];

  constructor(
    private agenda: AgendaService
  ) {
    this.lista = this.agenda.getListaCitas();
  }

  //public lista: citas[] = this.agenda.getListaCitas();

  private remove(pos:number) {
    this.agenda.removeCitas(pos);
    this.lista = this.agenda.getListaCitas();
  }
  
}
