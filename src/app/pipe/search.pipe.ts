import { Pipe, PipeTransform } from "@angular/core";
import { SortingInterface } from "../types/sorting.Interface";

@Pipe({
    name: 'searchPosts'
})
export class SearchPipe implements PipeTransform {
    transform(users: SortingInterface[], search = ''): SortingInterface[] {
        if (!search.trim()) {
            return users
        }
        return users?.filter(users => {
            return users.name.toLocaleLowerCase().includes(search.toLocaleLowerCase())
        })
    }

}
