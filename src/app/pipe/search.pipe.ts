import { Pipe, PipeTransform } from "@angular/core";
import { User } from "../types/sorting.Interface";

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
    transform(users: User[] | null, search = ''): User[] {
      if (!users) {
        return []
      }

        if (!search.trim()) {
            return users
        }
        return users?.filter(users => {
            return users.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }

}
