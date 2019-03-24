import { Component } from '@angular/core';

import { Platform, NavController, MenuController } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { SeguridadService } from './core/services/seguridad.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html'
})
export class AppComponent {
  public appPages = [
    {
      title: 'Booking',
      url: '/booking',
      icon: 'today'
    }
  ];
  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    public navCtrl: NavController,
    private seguridad: SeguridadService,
    private menu: MenuController,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  cerrarSesion(){
    this.menu.close();
    this.seguridad.cerrarSesion();
    this.navCtrl.navigateRoot(['/login']);
  }
}
