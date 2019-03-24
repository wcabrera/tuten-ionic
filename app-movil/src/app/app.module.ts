import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AutenticacionInterceptor } from './core/interceptor/autenticacion.interceptor';
import { IonicStorageModule } from '@ionic/storage';
import { IonicModule, IonicRouteStrategy, AlertController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    HttpClientModule,
    CoreModule.forRoot(
      {id:0, idCliente:0, idUsuario:0, nombre:"", telefono:"", email:"", token:"", perfil:""},
      {cliente: "", servicio: "", documento: "", actividad: ""}
    ),
    AppRoutingModule],
  providers: [
    StatusBar,
    SplashScreen,
    AlertController,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    { 
      provide: HTTP_INTERCEPTORS,
      useClass: AutenticacionInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
