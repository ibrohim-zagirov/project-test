import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ListService } from '../sevices/list.service';
import { SortingIntrface, User } from '../types/sorting.intrface';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  constructor(private listservice: ListService, private route: ActivatedRoute) { }
  cardUser: User[] = []

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {

        console.log('params', params)
        return this.listservice.getById(params['id'])
      })
    ).subscribe((user: User[]) => {
      this.cardUser = user


    })
  }
}