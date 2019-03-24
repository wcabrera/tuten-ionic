import { Injectable } from '@angular/core';
import {
    HttpInterceptor,
    HttpRequest,
    HttpResponse,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { SeguridadService } from '../services/seguridad.service';
import { NavController } from '@ionic/angular';

@Injectable()
export class AutenticacionInterceptor implements HttpInterceptor {

  constructor(private seguridadService: SeguridadService,
    public navCtrl: NavController) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
return next.handle(request).pipe(
  catchError(e => {
    if (e.status == 401) {
        this.seguridadService.cerrarSesion();
        this.navCtrl.navigateRoot(['/login']);
    }

    if (e.status == 403) {

    }
    return throwError(e);
  })
);
}
}