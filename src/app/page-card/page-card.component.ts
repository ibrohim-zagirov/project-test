import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ListService } from '../sevices/list.service';
import { User } from '../types/sorting.intrface';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  cardUser?: User
  constructor(private listservice: ListService, private route: ActivatedRoute) { }


  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => {

        console.log('params', params)
        return this.listservice.getById(params['id'])
      })
    ).subscribe((user: User) => {
      console.log(user);

      this.cardUser = user
    })
  }
}