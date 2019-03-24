import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Storage } from '@ionic/storage';
import { Platform } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlmacenamientoStorageService {

  constructor(private storage: Storage, private p: Platform) { }

  get(nombre: string): Observable<any> {
    return new Observable((observer) => {
      this.p.ready().then(() => {
        if (!this.p.is('cordova')) {
          observer.next(localStorage.getItem(nombre));
          observer.complete();
        } else {
          this.storage.get(nombre).then((val) => {
            observer.next(val);
            observer.complete();
          });
        }
      });
    });
  }

  set(nombre: string, contenido: string): Observable<any> {
    return new Observable((observer) => {
      this.p.ready().then(() => {
        if (!this.p.is('cordova')) {
 
          localStorage.setItem(nombre, contenido);
          observer.next(true);
          observer.complete();
        } else {
      
          this.set(nombre, contenido);
          observer.next(true);
          observer.complete();
        }
      });
    });
  }

  delete(nombre: string): Observable<any> {
    return new Observable((observer) => {
      if (!this.p.is('cordova')) {
        localStorage.removeItem(nombre);
        observer.next(true);
        observer.complete();
      } else {
        this.storage.remove(nombre).then((val) => {
          observer.next(val);
          observer.complete();
        });
      }
    });
  }

}
