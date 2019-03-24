import { NgModule, ModuleWithProviders, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SesionService } from './services/sesion.service';
import { TarjetaService } from './services/tarjeta.service';

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers:[SesionService, TarjetaService]
})
export class CoreModule {

  nstructor (@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule ya esta cargado');
    }
  }

  static forRoot(config: SesionService, tarjeta: TarjetaService): ModuleWithProviders {
    return {
      ngModule: CoreModule,
      providers: [
        {provide: SesionService, useValue: config },
        {provide: TarjetaService, useValue: tarjeta }
      ]
    };
  }


 }
