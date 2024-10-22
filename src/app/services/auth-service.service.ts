import { Injectable } from "@angular/core";
@Injectable()
export class AuthService {
  constructor() {}

  getAuthToken(): string {
    return localStorage.getItem("token");
  }
}
