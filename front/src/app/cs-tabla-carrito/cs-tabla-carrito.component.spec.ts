import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTablaCarritoComponent } from './cs-tabla-carrito.component';

describe('CsTablaCarritoComponent', () => {
  let component: CsTablaCarritoComponent;
  let fixture: ComponentFixture<CsTablaCarritoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTablaCarritoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTablaCarritoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
