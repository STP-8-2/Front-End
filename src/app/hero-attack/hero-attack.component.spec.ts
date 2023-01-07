import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeroAttackComponent } from './hero-attack.component';

describe('HeroAttackComponent', () => {
  let component: HeroAttackComponent;
  let fixture: ComponentFixture<HeroAttackComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeroAttackComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeroAttackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
