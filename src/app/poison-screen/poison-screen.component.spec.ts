import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoisonScreenComponent } from './poison-screen.component';

describe('PoisonScreenComponent', () => {
  let component: PoisonScreenComponent;
  let fixture: ComponentFixture<PoisonScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PoisonScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PoisonScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
