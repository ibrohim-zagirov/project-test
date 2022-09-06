import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
import { SortingIntrface } from "../types/sorting.intrface";

@Injectable()
export class ListService {
    constructor(private http: HttpClient) { }
    getList(): Observable<any> {
        return this.http.get('https://jsonplaceholder.typicode.com/users')
    }

    getById(id: string): Observable<any> {
        return this.http.get<SortingIntrface>(`${'https://jsonplaceholder.typicode.com/users'}/card/${id}.json`)
            .pipe(map((user: SortingIntrface) => {
                return
                ...user, id,
                date: new Date(user.date)
            }))
}
}
