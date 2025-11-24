import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { firstValueFrom } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GetInformationDataService{

  private url = "https://www.dropbox.com/scl/fi/ybry5v2tqd9ckyayxzz7a/DatosPage.json?rlkey=mcq23jf3brx68lxskcg43j4bw&st=sve5eznn"

  datos: any = null;

  constructor(private http: HttpClient) {}

  async cargarDatos(): Promise<any> {
    const datosGuardados = localStorage.getItem('datos_page');

    if (datosGuardados) {
      this.datos = JSON.parse(datosGuardados);
      console.log("Datos cargados desde localStorage:", this.datos);
      return this.datos;
    }
    try {
      this.url = this.url.replace("https://www.dropbox.com/","https://dl.dropboxusercontent.com/").replace("&dl=0","")
      const data = await firstValueFrom(this.http.get(this.url));
      localStorage.setItem('datos_page', JSON.stringify(data));
      this.datos = data;
      console.log("Datos descargados y guardados:", data);
      return data;
    } catch (err) {
      console.error("Error cargando datos:", err);
      throw err;
    }
  }
}
