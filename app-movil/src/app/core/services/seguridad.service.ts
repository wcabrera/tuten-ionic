import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SesionService } from './sesion.service';
import { PeticionesHttpService } from './peticiones-http.service';
import { AlmacenamientoStorageService } from './almacenamiento-storage.service';
import { TarjetaService } from './tarjeta.service';

@Injectable({
  providedIn: 'root'
})

export class SeguridadService {

  constructor(
    private sesion: SesionService,
    private tarjeta: TarjetaService,
    private req: PeticionesHttpService,
    private st: AlmacenamientoStorageService
  ) { }

  public comprobarSession(): Observable<boolean> {
    return new Observable((observer) => {
      //Pasamos la info de la sesion del storage al servicio
      this.st.get('sesion').subscribe((aux) => {
        if (aux) {
          let objeto = JSON.parse(aux);
          this.sesion.nombre = objeto.nombre;
          this.sesion.id = objeto.id;
          this.sesion.idCliente = objeto.idCliente;
          this.sesion.idUsuario = objeto.idUsuario;
          this.sesion.token = objeto.token;
          this.sesion.perfil = objeto.perfil;
          this.sesion.email = objeto.email;
          this.sesion.telefono = objeto.telefono;


          observer.next(true);
        } else {
          observer.next(false);
        }
        observer.complete();
      });
    });
  }

  public generarSesion(datos: any): Observable<boolean> {

    return new Observable((observer) => {
      this.req.postBasic({ url: 'oauth/token3', body: Object.assign({ 'grant_type': 'password' }, datos) }).subscribe((data: any) => {

        this.st.set('sesion', JSON.stringify({
          id: data.id_cliente,
          idCliente: data.id_cliente,
          idUsuario: data.id_usuario,
          nombre: data.nombrecompleto,
          email: data.email,
          telefono: '',
          token: data.sessionTokenBck,
          perfil: data.perfil
        })).subscribe((dato) => {



          this.sesion.nombre = data.nombrecompleto;
          this.sesion.id = data.id_cliente;
          this.sesion.idCliente = data.id_cliente;
          this.sesion.idUsuario = data.id_usuario;
          this.sesion.token = data.sessionTokenBck;
          this.sesion.perfil = data.perfil;
          this.sesion.email = data.email;
          this.sesion.telefono = '';
          observer.next(true);
          observer.complete();
        });
      }, error => {
        observer.next(false);
        observer.complete();

      });
    });
  }

  public cerrarSesion() {
    this.st.delete('sesion').subscribe((data) => {
    });
    this.st.delete('cronometro').subscribe((data) => {
    });
  }

}
