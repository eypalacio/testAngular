import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccesFormComponent } from './acces-form.component';

describe('AccesFormComponent', () => {
  let component: AccesFormComponent;
  let fixture: ComponentFixture<AccesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AccesFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AccesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
