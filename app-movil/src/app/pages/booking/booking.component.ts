import { Component, OnInit } from '@angular/core';
import { SesionService } from 'src/app/core/services/sesion.service';
import { NavController, AlertController } from '@ionic/angular';
import { Router, ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.scss'],
})
export class BookingComponent implements OnInit {

  parametros: any = {}
  booking = []
  busqueda: {}
  data = []
  datos = []
  constructor(  // public formBuilder: FormBuilder,
    private ss: SesionService,
    private navCtr: NavController,
    private router: Router,
    private route: ActivatedRoute,
    public alertController: AlertController,
    private bookingService: BookingService
  ) { }

  ngOnInit() {
    this.listBooking()


  }

  listBooking() {

    this.parametros.token = this.ss.token
    this.bookingService.listBooking(this.parametros).subscribe((data: any) => {
      this.data = data.map((d1) => {
        return {
          bookingId: d1.bookingId.toString(),
          cliente: d1.tutenUserClient.firstName + ' ' + d1.tutenUserClient.lastName,
          bookingTime: d1.bookingTime,
          streetAddress: d1.locationId.streetAddress,
          bookingPrice: d1.bookingPrice.toString()
        }

      })
      this.booking = this.data
    });


  }




  aplicarBusqueda(ev: any) {
    console.log(' ev',ev)
    this.parametros.token = this.ss.token
    let val = ev.target;

    this.bookingService.listBooking(this.parametros).subscribe((data: any) => {

      if (ev && ev.trim() !== '') {

        this.data = data.map((d1) => {
          return {
            bookingId: d1.bookingId.toString(),
            cliente: d1.tutenUserClient.firstName + ' ' + d1.tutenUserClient.lastName,
            bookingTime: d1.bookingTime,
            streetAddress: d1.locationId.streetAddress,
            bookingPrice: d1.bookingPrice.toString()
          }

        })
        this.booking =  this.data.filter(function (e) {

          let bookingId = (e.bookingId.toString()).toLowerCase()
          let bookingPrice=(e.bookingPrice.toString()).toLowerCase()
          return bookingId.indexOf(ev.toLowerCase()) != -1 || bookingPrice.indexOf(ev.toLowerCase()) != -1 ;
        });


      }

    });

  }


}
