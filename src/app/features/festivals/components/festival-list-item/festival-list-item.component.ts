import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'fest-festival-list-item',
  templateUrl: './festival-list-item.component.html',
  styleUrls: ['./festival-list-item.component.scss']
})
export class FestivalListItemComponent implements OnInit {
  @Input() festival: any;
  constructor() { }
  ngOnInit() {
  }

}
