import { Component, OnInit } from '@angular/core';
import { FestivalService } from '../../../services/festival.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'fest-festivals-list',
  templateUrl: './festivals-list-page.component.html',
  styleUrls: ['./festivals-list-page.component.scss']
})
export class FestivalsListPageComponent implements OnInit {
 festivals: Observable<any[]>;

  constructor(private festivalService: FestivalService) { }

  ngOnInit() {
    this.festivals = this.festivalService.getAllFestivals();
  }
}
