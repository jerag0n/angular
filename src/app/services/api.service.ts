import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { error } from 'selenium-webdriver';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  public apiUrl:string= "https://rickandmortyapi.com/api";
  public characterUrl=  "https://rickandmortyapi.com/api/character";

  constructor(private http: HttpClient) { 
this.getApi();


  }

  getApi():any{
    return this.http.get(this.characterUrl, {})
  }

}
