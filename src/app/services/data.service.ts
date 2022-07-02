import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json';
  constructor(private httpClient: HttpClient) { }

  getApiData() {
    return this.httpClient.get<any[]>(this.url);
  }
}
