import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor(private httpClient:HttpClient) { }
  getByID(id:number){
    return this.httpClient.get(`${environment.url}/News/Department/${id}`);
  }

  getTopNews(){
    return this.httpClient.get(`${environment.url}/News/TopNews`);
  }
  getFeaturedNews(){
    return this.httpClient.get(`${environment.url}/News/FeaturedNews`);
  }

  getNewsDetails(id:number){
    return this.httpClient.get(`${environment.url}/News/item/${id}`);
  }
}

