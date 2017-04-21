/**
 * Created by Tesfay on 4/20/2017.
 */
import {Http, Response, Headers, RequestOptions} from '@angular/http'
import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class PostService {
  private postUrl = 'https://jsonplaceholder.typicode.com/users?email=';
  constructor(private http: Http){}

  getPost(email): Observable<Object>{
    return this.http.get(this.postUrl + email)
      .map((res:Response) => res.json())
      .catch((error:any) => Observable.throw(error.json().error || 'Post Service Error'));
  }
}
