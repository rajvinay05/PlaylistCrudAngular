import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SongService {

  constructor( private http:HttpClient) { }

  baseUrl = "http://localhost:8080/api/";

  getSongList():Observable<any>{
    return this.http.get(this.baseUrl+'song');
  }

  createSong(song: object): Observable<object> {  
    return this.http.post(`${this.baseUrl}`+'new-song', song);  
  }  
}
