import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiRoutesHelper } from 'src/helpers/api-routes.helper';

@Injectable({
  providedIn: 'root'
})
export class BreedService {

  constructor(
    public _http: HttpClient
  ) {
  }
  
  list(): Observable<Object> {
      return this._http.get(ApiRoutesHelper.getBreedsURL());
  }
  breedImageList(breed: string): Observable<Object> {
    return this._http.get(ApiRoutesHelper.getBreedImagesURL(breed));
  }
}
