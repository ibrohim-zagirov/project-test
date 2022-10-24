import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ListService } from '../sevices/list.service';
import { BehaviorSubject, map, Observable, switchMap } from "rxjs";
import { User } from "../types/sorting.Interface";

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  public p: number = 1
  public users$: Observable<User[]> = this.listService.getUsers();
  private selectedUsersIds$ = new BehaviorSubject<number[]>([]);
  public filteredUsers$: Observable<User[]> = this.selectedUsersIds$.pipe(
    switchMap((selectedUserIds) =>
      this.users$.pipe(
        map((users) => selectedUserIds.length
          ? users.filter(
            (user) => selectedUserIds.includes(user.id)
          )
          : users
        )
      )
    )
  )
  public usernameControl = new FormControl('')
  public searchStr = ''
  public isMenuOpened = false
  public usersCount = 0

  constructor(private listService: ListService) { }

  ngOnInit(): void {
    this.usernameControl.valueChanges.subscribe(checked => {
      if (checked) {
        this.usersCount++
      } else if (this.usersCount > 0) {
        this.usersCount--
      }
    })
  }

  toggleMenu(): void {
    this.isMenuOpened = !this.isMenuOpened
  }

  clickOutside(): void {
    this.isMenuOpened = false
  }

  onChange(event: any, id: number) {
    this.selectedUsersIds$.next(
      event.target.checked
        ? [...this.selectedUsersIds$.value, id]
        : this.selectedUsersIds$.value.filter(selectedId => selectedId !== id)
    )
  }

}
