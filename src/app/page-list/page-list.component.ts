import { Component, OnInit } from '@angular/core';
import { ListService } from '../sevices/list.service';
import { SortingInterface } from '../types/sorting.Interface';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(private readonly listService: ListService) {

  }
  lstList!: SortingInterface[]
  showList?: string


  ngOnInit(): void {
    this.listService.getList().subscribe(data => { this.lstList = data })
  }

}
