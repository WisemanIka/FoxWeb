import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders, HttpParams } from "@angular/common/http";
import "rxjs/add/operator/share";
import { Observable } from "rxjs";

@Injectable()
export class HttpClientService {
  constructor(private _httpClient: HttpClient) {}

  private createHeader(contentType?: string) {
    let headers = new HttpHeaders({
      "Content-Type": "application/json"
    });
    
    return headers;
  }

  public get<T>(url: string, params: HttpParams): Observable<T> {
    let header = this.createHeader();

    let request = this._httpClient
      .get<T>(url, { params: params, headers: header })
      //.share();

    return request;
  }

  public post(url: string, data: any, contentType?: string): any {
    let header = this.createHeader();

    let request = this._httpClient
      .post(url, data, { headers: header })
      //.share();

    return request;
  }

  public put(url: string, data: any, contentType?: string): any {
    let header = this.createHeader();

    let request = this._httpClient
      .put(url, data, { headers: header })
      //.share();

    return request;
  }

  public delete(url: string, id: string, contentType?: string): any {
    let header = this.createHeader();

    let request = this._httpClient
      .delete(`${url}/${id}`, { headers: header })
      //.share();

    return request;
  }
}
