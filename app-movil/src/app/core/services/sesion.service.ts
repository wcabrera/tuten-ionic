import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SesionService {
  
  public id: number;
  public idUsuario: number;
  public idCliente: number;
  public nombre: string;
  public telefono: string;
  public email: string;
  public token: string;
  public perfil: string;

  constructor(@Optional() config: SesionService) {
    if (config) {
      this.id = config.id;
      this.idUsuario = config.idUsuario;
      this.idCliente = config.idCliente;
      this.nombre = config.nombre;
      this.telefono = config.telefono;
      this.email = config.email;
      this.token = config.token;
      this.perfil = config.perfil;
    }

  }
}
