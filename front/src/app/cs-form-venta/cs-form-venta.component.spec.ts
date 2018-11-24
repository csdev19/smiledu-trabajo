import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormVentaComponent } from './cs-form-venta.component';

describe('CsFormVentaComponent', () => {
  let component: CsFormVentaComponent;
  let fixture: ComponentFixture<CsFormVentaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsFormVentaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFormVentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
