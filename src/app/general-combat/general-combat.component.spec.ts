import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralCombatComponent } from './general-combat.component';

describe('GeneralCombatComponent', () => {
  let component: GeneralCombatComponent;
  let fixture: ComponentFixture<GeneralCombatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralCombatComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralCombatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
