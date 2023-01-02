import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeneralDirectionComponent } from './general-direction.component';

describe('GeneralDirectionComponent', () => {
  let component: GeneralDirectionComponent;
  let fixture: ComponentFixture<GeneralDirectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeneralDirectionComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GeneralDirectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
