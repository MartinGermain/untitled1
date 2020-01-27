import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Imprimante} from './imprimante';
import {Materiau} from './materiau';
import {Observable} from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import {Scanner} from "./scanner";
import {Logiciel} from "./logiciel";

@Injectable({
  providedIn: 'root'
})
export class AppService {
  // tslint:disable-next-line:max-line-length
  private url = 'https://gist.githubusercontent.com/m-germain/6f344538a47fe7d0cc285e7a51661fc9/raw/88d75effaf0a6b0482872b222bc617c238a506ac/bd.json';
  constructor(private http: HttpClient) { }

  getImrpimantes(): Observable<Imprimante[]> {
      return this.http.get<Imprimante[]>(this.url);
    }

   getMateriaux(): Observable<Materiau[]> {
      return this.http.get<Materiau[]>(this.url);
    }

  getScanner(): Observable<Scanner[]> {
    return this.http.get<Scanner[]>(this.url);
  }

  getLogiciel(): Observable<Logiciel[]> {
    return this.http.get<Logiciel[]>(this.url);
  }
}
