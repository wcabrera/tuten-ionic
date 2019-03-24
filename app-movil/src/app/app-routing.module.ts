import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { 
  AutenticacionGuardService as AuthGuard 
  } from './core/services/autenticacion-guard.service'; 
const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    //redirectTo: 'bajar-subir-palet',
    pathMatch: 'full'
  },
  { path: 'login', loadChildren: './autenticacion/login/login.module#LoginPageModule' },
  { path: 'booking', loadChildren: './pages/booking/booking.module#BookingPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
