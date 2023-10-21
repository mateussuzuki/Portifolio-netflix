import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FelipeAlvarengaComponent } from './felipe-alvarenga.component';

describe('FelipeAlvarengaComponent', () => {
  let component: FelipeAlvarengaComponent;
  let fixture: ComponentFixture<FelipeAlvarengaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FelipeAlvarengaComponent]
    });
    fixture = TestBed.createComponent(FelipeAlvarengaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
