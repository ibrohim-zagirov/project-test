<<<<<<< HEAD
import { Component, HostBinding, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../sevices/list.service';
import { SortingInterface } from '../types/sorting.intrface';
=======
import { Component, OnInit } from '@angular/core';
import { ListService } from '../sevices/list.service';
import { SortingInterface } from '../types/sorting.Interface';
>>>>>>> c280e5dc5fb558b23a7962544d18fa6ba3d63fc5

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(private readonly listService: ListService) {

  }
<<<<<<< HEAD
  pageList!: SortingInterface[]
  searchStr = ''
  usernameControl!: FormControl

  isMenuOpeden: boolean = false


  ngOnInit(): void {
    this.listservice.getList().subscribe(data => { this.pageList = data })

    this.usernameControl = new FormControl('')
    this.usernameControl.valueChanges.subscribe((value) => console.log(value)
    )
  }

  toggleMenu() {
    this.isMenuOpeden = !this.isMenuOpeden
=======
  lstList!: SortingInterface[]
  showList?: string


  ngOnInit(): void {
    this.listService.getList().subscribe(data => { this.lstList = data })
>>>>>>> c280e5dc5fb558b23a7962544d18fa6ba3d63fc5
  }

}
