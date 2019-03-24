import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import * as configs from './../../../environments/environment';
import { Observable } from 'rxjs';
import { SesionService } from './sesion.service';
import { RequestOptions, Request, RequestMethod } from '@angular/http';

@Injectable({
  providedIn: 'root'
})
export class PeticionesHttpService {
  constructor(private http: HttpClient, private sesion: SesionService) {
  }

  url = "https://dev.tuten.cl/TutenREST/rest/user"
  /*
metodo para obtener informacion del api
  parametros
  data: object{ -> datos que requiere la peticion para funcionar
      url:string  -> ruta relativa a donde se quiere consultar,
      params:object  -> parametros que van por la peticion que sirven para filtrar la consulta, como page
  }
*/

  public get(data: any): Observable<any> {

    //  const credenciales = btoa(`${configs.environment.configs.api.credenciales.usuario}:${configs.environment.configs.api.credenciales.clave}`);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + this.sesion.token,
    });

    let params = new URLSearchParams();
    for (let aux in data.params) {
      params.set(aux, data.params[aux]);
    }
    let options: any = { headers: httpHeaders };

    return this.http.post(this.url + data.url, data.params, options);
  }

  public getError(data: any): Observable<any> {

    //  const credenciales = btoa(`${configs.environment.configs.api.credenciales.usuario}:${configs.environment.configs.api.credenciales.clave}`);
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + this.sesion.token,
    });

    let params = new URLSearchParams();
    for (let aux in data.params) {
      params.set(aux, data.params[aux]);
    }
    let options: any = { headers: httpHeaders };

    return this.http.post(this.url + data.url, data.params, options);
  }


  /*
  metodo para caragar informacion en el api
  parametros
  data: object{ -> datos que requiere la peticion para funcionar
      url:string  -> ruta relativa a donde se quiere consultar,
      body:object  -> parametros que van a insertar
  }
  */
  public getnu(data: any): Observable<any> {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      // 'Authorization': 'Bearer ' + this.sesion.token,
      'token':data.parametros.token,
      'adminemail':'testapis@tuten.cl',
      'Origen':'https://dev.tuten.cl',
      'X-Host-Override':'dev.tuten.cl',
      'Accept':'application/json',
      'App':'APP_BCK'
    });
    let params = new URLSearchParams();
    for (let aux in data.body) {
      params.set(aux, data.body[aux]);
    }
    let options: any = { headers: httpHeaders, params: data.params };

    return this.http.get(data.url, options);
  }

  /*
  metodo para caragar informacion en el api
  parametros
  data: object{ -> datos que requiere la peticion para funcionar
      url:string  -> ruta relativa a donde se quiere consultar,
      body:object  -> parametros que van a insertar
  }
  */

  public post(data: any): Observable<any> {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + this.sesion.token,
    });
    let params = new URLSearchParams();
    for (let aux in data.body) {
      params.set(aux, data.body[aux]);
    }
    let options: any = { headers: httpHeaders };

    return this.http.post(this.url + data.url, data.body, options);
  }


  public postBasic(data: any): Observable<any> {

    const credenciales = btoa(`${configs.environment.configs.api.credenciales.usuario}:${configs.environment.configs.api.credenciales.password}`);
    const httpHeaders = new HttpHeaders({
      'Access-Control-Allow-Origin' : '*',
      'Access-Control-Allow-Methods': 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH',
      'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With,Origin,Accept',
      'X-Requested-With': 'XMLHttpRequest',
      'Access-Control-Allow-Credentials':'true',
      'Content-Type': 'application/json',
      'Password': data.body.password,
      'App': 'APP_BCK',
      'Origen': 'https://dev.tuten.cl',
      'X-Host-Override': 'dev.tuten.cl',
      'Accept': 'application/json'
    });



    let params = new URLSearchParams();
    for (let aux in data.body) {
      params.set(aux, data.body[aux]);
    }
    let options: any = { headers: httpHeaders };
    // let options = new RequestOptions({ headers:httpHeaders});

    return this.http.put(configs.environment.configs.api.url + "/"+ data.body.username +"", "", options);
  }

  /*
metodo para actualizar informacion en el api
parametros
data: object{ -> datos que requiere la peticion para funcionar
url:string  -> ruta relativa a donde se quiere consultar,
body:object  -> parametros que van a actualizar
}
 
  */
  public put(data: any): Observable<any> {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + this.sesion.token,
    });
    let params = new URLSearchParams();
    for (let aux in data.body) {
      params.set(aux, data.body[aux]);
    }
    let options: any = { headers: httpHeaders };

    return this.http.put(configs.environment.configs.api.url + data.url, params.toString(), options);
  }

  /*
  metodo para eliminar informacion en el api
parametros
data: object{ -> datos que requiere la peticion para funcionar
   url:string  -> ruta relativa a donde se quiere consultar
}
  */
  public delete(data: any) {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json;charset=UTF-8',
      'Authorization': 'Bearer ' + this.sesion.token,
    });
    let options: any = { headers: httpHeaders };
    return this.http.delete(configs.environment.configs.api.url + data.url, options);

  }
}
