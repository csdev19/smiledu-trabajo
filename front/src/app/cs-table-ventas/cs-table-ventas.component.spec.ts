import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTableVentasComponent } from './cs-table-ventas.component';

describe('CsTableVentasComponent', () => {
  let component: CsTableVentasComponent;
  let fixture: ComponentFixture<CsTableVentasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTableVentasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTableVentasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
