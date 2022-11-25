import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LegoBlockComponentComponent } from './lego-item-component.component';

describe('LegoBlockComponentComponent', () => {
  let component: LegoBlockComponentComponent;
  let fixture: ComponentFixture<LegoBlockComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LegoBlockComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LegoBlockComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
