import { Component } from '@angular/core';
import { AgendaService } from '../services/agenda.service'
import { citas } from '../services/citas';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(
    private agenda: AgendaService
  ) {}

  public lista: citas[] = this.agenda.getListaCitas();
  
  
}
