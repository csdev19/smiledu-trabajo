import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsCardElementoCompraComponent } from './cs-card-elemento-compra.component';

describe('CsCardElementoCompraComponent', () => {
  let component: CsCardElementoCompraComponent;
  let fixture: ComponentFixture<CsCardElementoCompraComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsCardElementoCompraComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsCardElementoCompraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
