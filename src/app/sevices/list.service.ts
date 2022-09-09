import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SortingIntrface, User } from "../types/sorting.intrface";

@Injectable()
export class ListService {
    constructor(private http: HttpClient) { }
    getList(): Observable<any> {
<<<<<<< HEAD
        return this.http.get<SortingIntrface>('https://jsonplaceholder.typicode.com/users')
    }

    getById(id: string): Observable<any> {
        return this.http.get<User>(`${'https://jsonplaceholder.typicode.com/users'}/card/${id}.json`)
            .pipe(map((user: User) => {
                console.log('user', user);
                return {
                    ...user,
                    id,
                }
=======
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

    getById(id: string): Observable<any> {
        return this.http.get<SortingIntrface>(`${'https://jsonplaceholder.typicode.com/users'}/card/${id}.json`)
            .pipe(map((user: SortingIntrface) => {
                return
                ...user, id,
                date: new Date(user.date)
>>>>>>> 173a6e7f36aa12730b6832c6a7439e29ecd5338c
            }))
    }
}
<<<<<<< HEAD
=======
}
>>>>>>> 173a6e7f36aa12730b6832c6a7439e29ecd5338c
