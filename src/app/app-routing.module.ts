import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { FramePageComponent } from './pages/frame-page/frame-page.component';
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { ClinicasComponent } from './pages/clinicas/clinicas.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: FramePageComponent,
    children: [
      { path: '', component: DashboardPageComponent}
    ]
  },
  {
    path: 'clinicas',
    component: FramePageComponent,
    children: [
      { path: '', component: ClinicasComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
