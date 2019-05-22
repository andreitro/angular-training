import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditFestivalPageComponent } from './edit-festival-page.component';

describe('EditFestivalPageComponent', () => {
  let component: EditFestivalPageComponent;
  let fixture: ComponentFixture<EditFestivalPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditFestivalPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditFestivalPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
