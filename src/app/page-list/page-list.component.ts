import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../sevices/list.service';
import { SortingInterface, User } from '../types/sorting.Interface';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(
    private listservice: ListService,
    private route: ActivatedRoute
  ) { }
  usernameControl: FormControl = new FormControl('')
  pageList!: SortingInterface[]
  searchStr = ''
  isMenuOpeden: boolean = false
  currentВataa = 0
  userscount = 0
  users: any = []
  tempArray: any = []
  dataArray: any = []


  ngOnInit(): void {
    this.listservice.getList().subscribe(users => {
      this.users = users
      console.log(this.users)
    })

    this.listservice.getList().subscribe(data => { this.pageList = data })
    this.usernameControl.valueChanges.subscribe(checked => {
      if (checked) {
        this.userscount++
      } else if (this.userscount > 0) {
        this.userscount--
      }
    })

  }

  toggleMenu(): void {
    this.isMenuOpeden = !this.isMenuOpeden
  }

  clickOutside() {
    this.isMenuOpeden = false
  }


  onChange(event: any, id: number) {
    console.log();

    if (event.target.checked) {
      this.tempArray = this.users.filter((e: any) => e.id == id)
    }
    else {

    }

  }

}
