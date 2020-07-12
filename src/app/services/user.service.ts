import { Users } from './../users/users.model';
import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from "rxjs";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  private customersUrl = "http://localhost:3000/users";

  constructor(private http: HttpClient) { }

  getUser(): Observable<Users[]> {
    return this.http.get<Users[]>(this.customersUrl);
  }

  getUserById(payload: number): Observable<Users> {
    return this.http.get<Users>(`${this.customersUrl}/${payload}`);
  }

  createUser(payload: Users): Observable<Users> {
    return this.http.post<Users>(this.customersUrl, payload);
  }

  updateUser(customer: Users): Observable<Users> {
    return this.http.patch<Users>(
      `${this.customersUrl}/${customer.id}`,
      customer
    );
  }

  deleteCustomer(payload: number) {
    return this.http.delete(`${this.customersUrl}/${payload}`);
  }
}
