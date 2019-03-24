import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SesionService } from './sesion.service';
import { SeguridadService } from './seguridad.service';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionGuardService implements CanActivate {



  constructor(private router: Router, private sesion: SesionService, private seguridad: SeguridadService) { }


  canActivate(): Observable<boolean> {
    if (this.sesion.token) {
        return of(true);
    }
    else {
     return this.seguridad.comprobarSession().pipe(map((data) => {
        if (data && this.sesion.token) {
            return true;
        } else {
          this.router.navigate(['login']);
          return false;
        }
      }));
    }

  }
}
