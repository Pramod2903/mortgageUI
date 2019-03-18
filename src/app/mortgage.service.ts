import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs/Observable";

@Injectable()
export class MortgageService {
  constructor(private _http: HttpClient) {}
  httpOptions = {
    headers: new HttpHeaders({
      "Content-Type": "application/json"
    })
  };
  userRegistrationSer(obj): Observable<any> {
    // let url = `${this.rootUrl}/policyCount`;
    let body = JSON.stringify(obj);
    let url = `http://10.117.189.206:9080/mortgage/api/user`;
    return this._http.post(url, body, this.httpOptions);
  }
}
