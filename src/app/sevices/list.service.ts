import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { map, Observable } from "rxjs";
<<<<<<< HEAD
import { SortingInterface, User } from "../types/sorting.intrface";
=======
import { SortingInterface, User } from "../types/sorting.Interface";
>>>>>>> c280e5dc5fb558b23a7962544d18fa6ba3d63fc5

@Injectable()
export class ListService {
    constructor(private http: HttpClient) { }
    getList(): Observable<any> {
        return this.http.get<SortingInterface>('https://jsonplaceholder.typicode.com/users')
    }

    getById(id: string): Observable<any> {
        return this.http.get<User>(`${'https://jsonplaceholder.typicode.com/users'}/${id}`)
            .pipe(map((user: User) => {
                console.log('user', user);
                return {
                    ...user,
                    id,
<<<<<<< HEAD
                }
            }))
    }
}
=======
                };
            }
          ))
    }
}

>>>>>>> c280e5dc5fb558b23a7962544d18fa6ba3d63fc5
