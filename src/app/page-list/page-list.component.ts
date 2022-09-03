import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ListService } from '../sevices/list.service';
import { SortingIntrface } from '../types/sorting.intrface';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {

  constructor(private listservice: ListService, private route: ActivatedRoute) {

  }
  lstList!: SortingIntrface[]
  showList?: string


  ngOnInit(): void {
    this.listservice.getList().subscribe(data => { this.lstList = data })
  }

}
