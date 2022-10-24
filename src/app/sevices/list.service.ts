import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { User } from "../types/sorting.Interface";

@Injectable()
export class ListService {
    constructor(private http: HttpClient) { }

    public getUsers(): Observable<User[]> {
        return this.http.get<User[]>('https://jsonplaceholder.typicode.com/users')
    }

    public getUserById(id: string): Observable<any> {
        return this.http.get<User>(`${'https://jsonplaceholder.typicode.com/users'}/${id}`)
            .pipe(map((user: User) => {
                return {
                    ...user,
                    id,
                };
            }
            ))
    }


}
