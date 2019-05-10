import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class FestivalService {
  private festivalsUrl = 'api/festivals';

  constructor(
    private http: HttpClient) { }

  getAllFestivals(): Observable<any> {
    return this.http.get(this.festivalsUrl);
  }
  getFestival(id: number): Observable<any> {
    const url = `${this.festivalsUrl}/?id=${id}`;
    return this.http.get(url);
  }
}

