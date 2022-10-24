import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SortingInterface, User } from "../types/sorting.Interface";

@Injectable()
export class ListService {
    constructor(private http: HttpClient) { }
    getList(): Observable<any> {
        return this.http.get<SortingInterface>('https://jsonplaceholder.typicode.com/users')
    }

    getById(id: string): Observable<any> {
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