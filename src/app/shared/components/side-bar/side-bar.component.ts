import { Component } from '@angular/core';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
})
export class SideBarComponent {

  public menuItems: MenuItem[] = [
    {
      name: 'Dashboard',
      icon: 'fa fa-dashboard',
      route: '/dashboard',
    },
    {
      name: 'Clinícas',
      icon: 'fa fa-clinic-medical',
      route: '/clinicas',
    },
    {
      name: 'Usuários',
      icon: 'fa fa-users',
      route: '/usuarios',
    }
  ]
}

class MenuItem {
  constructor(
    public name: string,
    public icon: string,
    public route: string,
    public children?: MenuItem[]
  ) { }
}