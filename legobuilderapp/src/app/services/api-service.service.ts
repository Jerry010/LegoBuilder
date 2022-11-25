import { Injectable } from '@angular/core';
import {User} from '../objects/user';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_BASE_URL = 'http://localhost:3000/';
const GET_USER_BY_ID_URL = 'users?id=';
const UPDATE_USER_BY_ID_URL = 'users/';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  public getUserById(userId:number):Observable<User[]>{
      return this.http.get<User[]>(`${API_BASE_URL}${GET_USER_BY_ID_URL}${userId}`);
  }

  //for now i update the entire user object, normally ofcourse you would only update the changed entities, but thats was a little too much for this little project
  public updateUser(user:User):Observable<any>{
    
    //normally this could be a patch since we only update part of the user (his collection), also
    return this.http.put(`${API_BASE_URL}${UPDATE_USER_BY_ID_URL}${user.id}`,user);
  }

}
