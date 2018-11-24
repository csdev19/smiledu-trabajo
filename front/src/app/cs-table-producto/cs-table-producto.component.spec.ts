import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTableProductoComponent } from './cs-table-producto.component';

describe('CsTableProductoComponent', () => {
  let component: CsTableProductoComponent;
  let fixture: ComponentFixture<CsTableProductoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTableProductoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTableProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
