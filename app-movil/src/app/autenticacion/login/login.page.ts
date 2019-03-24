import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MenuController, ToastController, NavController } from '@ionic/angular';
import { SeguridadService } from 'src/app/core/services/seguridad.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  form: FormGroup;
  constructor(
    public menuCtrl: MenuController,
    public navCtrl: NavController,
    public tc: ToastController,
    public formBuilder: FormBuilder,
    private seguridad: SeguridadService
  ) {
    this.menuCtrl.enable(false);
  }

  ngOnInit() {
    this.form = this.formBuilder.group({
      usuario: ['', [Validators.required]],
      password: ['', [Validators.required]]
    });
  }

  aceptar() {
    if (this.form.valid) {

      this.seguridad.generarSesion({
        username: this.form.value.usuario,
        password: this.form.value.password
      }).subscribe((data)=>{ 

        if(data){

          this.menuCtrl.enable(true);
          this.form.patchValue({ usuario: "", password: "" });
           this.navCtrl.navigateRoot(['/booking']);
        }else{
          this.presentToast('El usuario o contraseña no es correcto. Por favor consulte a soporte');
        }
      });
     
    }
  }


  async presentToast(texto:string) {
    const toast = await this.tc.create({
      message: texto,
      duration: 2000,
      position: "middle"
    });
    toast.present();
  }

}
