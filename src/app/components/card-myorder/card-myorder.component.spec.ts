import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardMyorderComponent } from './card-myorder.component';

describe('CardMyorderComponent', () => {
  let component: CardMyorderComponent;
  let fixture: ComponentFixture<CardMyorderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardMyorderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardMyorderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
