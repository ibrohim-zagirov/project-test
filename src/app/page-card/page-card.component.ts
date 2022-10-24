import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ListService } from '../sevices/list.service';
import { User } from '../types/sorting.Interface';

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {

  cardUser: User | undefined
  constructor(
    private readonly listService: ListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.listService.getById(params['id']))
    ).subscribe((user: User) => {
      this.cardUser = user
    })

  }
}
