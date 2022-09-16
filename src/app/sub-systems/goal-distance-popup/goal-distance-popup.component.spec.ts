import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalDistancePopupComponent } from './goal-distance-popup.component';

describe('GoalDistancePopupComponent', () => {
  let component: GoalDistancePopupComponent;
  let fixture: ComponentFixture<GoalDistancePopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalDistancePopupComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GoalDistancePopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
