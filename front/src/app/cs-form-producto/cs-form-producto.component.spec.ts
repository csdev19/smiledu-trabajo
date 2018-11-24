import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormProductoComponent } from './cs-form-producto.component';

describe('CsFormProductoComponent', () => {
  let component: CsFormProductoComponent;
  let fixture: ComponentFixture<CsFormProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsFormProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFormProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
