import { Component, OnInit, Output, EventEmitter, Input } from "@angular/core";
import { Festival } from "../../festival";
import { FestivalService } from "src/app/features/services/festival.service";
import { FormControl, Validators } from "@angular/forms";

export interface Festival {
  title: string;
  city: string;
  price: number;
}

@Component({
  selector: "fest-festival-form",
  templateUrl: "./festival-form.component.html",
  styleUrls: ["./festival-form.component.scss"]
})
export class FestivalFormComponent {
  model: Festival;
  form = new FormControl("", Validators.required);
  @Output()
  saveEvent: EventEmitter<Festival> = new EventEmitter<Festival>();
  @Input()
  festival: Festival;

  constructor() {}

  onSubmit(festival) {
    this.saveEvent.emit(festival);
  }
  getErrorMessage() {
    return this.form.hasError('required') ? 'You must enter a value' : '';
  }
}
