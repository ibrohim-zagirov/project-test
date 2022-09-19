import { Component, HostBinding, OnInit } from '@angular/core';
import { flush } from '@angular/core/testing';
import { FormControl } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../sevices/list.service';
import { SortingInterface } from '../types/sorting.Interface';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(private listservice: ListService, private route: ActivatedRoute) {

  }
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

  toggleMenu(): void {
    this.isMenuOpeden = !this.isMenuOpeden
  }

  clickOutside() {
    this.isMenuOpeden = false
  }

}
