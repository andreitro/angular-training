import { Component, OnInit } from '@angular/core';
import { FestivalService } from 'src/app/features/services/festival.service';
import { Festival } from '../../festival';

@Component({
  selector: 'fest-create-festival-page',
  templateUrl: './create-festival-page.component.html',
  styleUrls: ['./create-festival-page.component.scss']
})
export class CreateFestivalPageComponent implements OnInit {
  constructor(private festivalService: FestivalService) {}

  ngOnInit() {}
  createFestival(festival: Festival) {
    this.festivalService.createFestival(festival).subscribe();;
  }
}
