import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputRunComponent } from './input-run.component';

describe('InputRunComponent', () => {
  let component: InputRunComponent;
  let fixture: ComponentFixture<InputRunComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputRunComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputRunComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
