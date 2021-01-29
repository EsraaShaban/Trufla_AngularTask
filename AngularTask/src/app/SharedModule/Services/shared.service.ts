import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from 'rxjs/operators';

@Injectable()
export class SharedService {

  constructor(private _http: HttpClient) {}

  /* Get Form Json File */
  public getFormJsonData(){
    return this._http.get('../../assets/jsons/form.json');
  }

  /* Get Product Json File */
  public getProductJsonData(){
    // return this._http.get('../../assets/jsons/product.json').pipe(map((res: Response) => res));
    return this._http.get('../../assets/jsons/product.json');
  }

}
