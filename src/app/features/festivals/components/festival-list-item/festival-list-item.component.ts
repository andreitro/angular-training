import { Component, OnInit, Input } from "@angular/core";
import { Festival } from "../../festival";

@Component({
  selector: "fest-festival-list-item",
  templateUrl: "./festival-list-item.component.html",
  styleUrls: ["./festival-list-item.component.scss"]
})
export class FestivalListItemComponent {
  @Input() festival: Festival;
}
