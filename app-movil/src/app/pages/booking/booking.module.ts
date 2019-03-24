import { NgModule, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule, Router, ActivatedRoute } from '@angular/router';

import { IonicModule, NavController, AlertController } from '@ionic/angular';
import { SesionService } from 'src/app/core/services/sesion.service';
import { BookingComponent } from './booking.component';
import { BookingService } from 'src/app/services/booking.service';

const routes: Routes = [
  {
    path: '',
    component: BookingComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [BookingComponent]
})
export class BookingPageModule implements OnInit {
  data = 1
  constructor(
  ) {  }

  ngOnInit() {
  

  }


  




 




}






