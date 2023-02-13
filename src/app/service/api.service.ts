import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ApiService {

  API_BASE_URL = 'https://lzrqaxbfjb.execute-api.us-east-2.amazonaws.com/develop/api/v2/'

  constructor(private http: HttpClient) { }

  login(form: any): Observable<any> {
    const url = this.API_BASE_URL + 'token/new'
    const header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.post(url, form, { headers: header })
  }

  register(form: any): Observable<any> {
    const url = this.API_BASE_URL + 'user/register'
    const header = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
    return this.http.post(url, form, { headers: header })
  }
}
