import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QueueService {
  //private apiUrl = 'https://localhost:7167/api/Queue'; // เปลี่ยนตาม port ของ .NET
  private apiUrl = 'http://localhost:5044/api/Queue';


  constructor(private http: HttpClient) {}

  issueQueue() {
    return this.http.post(`${this.apiUrl}/issue`, {});
  }

  resetQueue() {
    return this.http.post(`${this.apiUrl}/reset`, {});
  }

  getCurrentQueue() {
    return this.http.get(`${this.apiUrl}/current`);
  }
}
