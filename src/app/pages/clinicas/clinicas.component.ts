import { Component } from '@angular/core';
import { Clinica } from 'src/app/shared/models/clinica';

@Component({
  selector: 'app-clinicas',
  templateUrl: './clinicas.component.html'
})
export class ClinicasComponent {

  public clinicas: Clinica[] = [
    {
      id: 1,
      nome: 'Clinica 1',
      ativa: true,
      cadastradoDesde: new Date()
    }
  ]

}
