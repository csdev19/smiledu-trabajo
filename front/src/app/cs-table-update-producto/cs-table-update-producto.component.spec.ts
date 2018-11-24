import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTableUpdateProductoComponent } from './cs-table-update-producto.component';

describe('CsTableUpdateProductoComponent', () => {
  let component: CsTableUpdateProductoComponent;
  let fixture: ComponentFixture<CsTableUpdateProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTableUpdateProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTableUpdateProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
