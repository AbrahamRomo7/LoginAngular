import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const urlL='http://127.0.0.1/Apis/log.php';

@Injectable({
  providedIn: 'root'
})
export class LogerService {

  constructor(private http: HttpClient) { }
  loguear(user:string,pass:string){
    const url = `${urlL}?user=${user}&pass=${pass}`;
    return this.http.get(url)
  }
}
