import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DirectionScreenComponent } from './direction-screen.component';

describe('DirectionScreenComponent', () => {
  let component: DirectionScreenComponent;
  let fixture: ComponentFixture<DirectionScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DirectionScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DirectionScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
