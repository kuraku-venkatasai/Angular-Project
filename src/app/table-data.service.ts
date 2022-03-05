import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './user';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class TableDataService {
  constructor(private http: HttpClient) {}
  // tslint:disable-next-line:quotemark
  private url: any = 'assets/userDetails.json';

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }
}
