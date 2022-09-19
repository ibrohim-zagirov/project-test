import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { switchMap } from 'rxjs';
import { ListService } from '../sevices/list.service';
<<<<<<< HEAD
import { User } from '../types/sorting.intrface';
=======
import { User } from '../types/sorting.Interface';
>>>>>>> c280e5dc5fb558b23a7962544d18fa6ba3d63fc5

@Component({
  selector: 'app-page-card',
  templateUrl: './page-card.component.html',
  styleUrls: ['./page-card.component.scss']
})
export class PageCardComponent implements OnInit {
  cardUser: User | undefined

<<<<<<< HEAD
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

=======
  constructor(
    private readonly listService: ListService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.route.params.pipe(
      switchMap((params: Params) => this.listService.getById(params['id']))
    ).subscribe((user: User) => {
>>>>>>> c280e5dc5fb558b23a7962544d18fa6ba3d63fc5
      this.cardUser = user
    })
  }
}
