import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KitchenloginComponent } from './kitchenlogin.component';

describe('KitchenloginComponent', () => {
  let component: KitchenloginComponent;
  let fixture: ComponentFixture<KitchenloginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KitchenloginComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(KitchenloginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
