import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeathScreenComponent } from './death-screen.component';

describe('DeathScreenComponent', () => {
  let component: DeathScreenComponent;
  let fixture: ComponentFixture<DeathScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeathScreenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeathScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
