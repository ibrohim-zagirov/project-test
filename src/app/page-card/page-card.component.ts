import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ListService } from '../sevices/list.service';
import { SortingIntrface } from '../types/sorting.intrface';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  constructor(private listservice: ListService, private route: ActivatedRoute) { }
  cardList!: SortingIntrface[]

  ngOnInit() {
    this.route.params.subscribe((params: Params) => { })
  }

}