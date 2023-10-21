import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MateusSuzukiComponent } from './mateus-suzuki.component';

describe('MateusSuzukiComponent', () => {
  let component: MateusSuzukiComponent;
  let fixture: ComponentFixture<MateusSuzukiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MateusSuzukiComponent]
    });
    fixture = TestBed.createComponent(MateusSuzukiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
