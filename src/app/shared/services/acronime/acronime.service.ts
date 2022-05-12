import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import axios from 'axios';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AcronimeService {

  private apiAlochol=environment.api_alcohol;

  private api_db=environment.api_db;

  constructor(private http:HttpClient) { }


   obtenerSiginificados(data:string){

    return axios.get(`${this.apiAlochol}?s=${data}`);

   }


   crearHistorial(id_user:number, acronime:string){

    return axios.post(`${this.api_db}/acronime/createAcronime`, {id_user,acronime});

   }



   obtenerHistorial(id_user:number){

    const params={id_user:id_user};
     
    return axios.get(`${this.api_db}/acronime/getAcronime`, {params});

   }


}
