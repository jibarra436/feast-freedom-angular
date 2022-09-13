import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatekitchenComponent } from './createkitchen.component';

describe('CreatekitchenComponent', () => {
  let component: CreatekitchenComponent;
  let fixture: ComponentFixture<CreatekitchenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatekitchenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreatekitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
