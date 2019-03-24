import { Injectable, Optional } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class TarjetaService {

  public cliente: string;
  public servicio: string;
  public documento: string;
  public actividad: string;

  constructor(@Optional() config: TarjetaService) {
    if (config) {
      this.cliente = config.cliente;
      this.servicio = config.servicio;
      this.documento = config.documento;
      this.actividad = config.actividad;
    }
  }
}
