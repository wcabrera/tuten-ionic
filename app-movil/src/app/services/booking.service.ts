import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PeticionesHttpService } from 'src/app/core/services/peticiones-http.service';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class BookingService {
  private recurso: string = "https://dev.tuten.cl/TutenREST/rest/user/contacto@tuten.cl/";
  constructor(private req: PeticionesHttpService,private http: HttpClient) { }

  data=[]

  public listBooking(parametros): Observable<any[]> {

    return new Observable((observer) => {
      this.req.getnu({ url: `${this.recurso}/bookings?current=true`,parametros }).subscribe((data: any) => {
  
        this.data=data
        observer.next(data);
        observer.complete();
      });

    });
  }



}
