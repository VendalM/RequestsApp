import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class RequestService {
  private requestsUrl = "api/requests"

  constructor(private _httpClient: HttpClient) {
  }

  public getRequests(): Observable<Array<any>>{
    return this._httpClient.get<any[]>(this.requestsUrl);
  }
}
