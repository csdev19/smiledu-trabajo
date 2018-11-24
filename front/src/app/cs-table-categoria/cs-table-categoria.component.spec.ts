import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTableCategoriaComponent } from './cs-table-categoria.component';

describe('CsTableCategoriaComponent', () => {
  let component: CsTableCategoriaComponent;
  let fixture: ComponentFixture<CsTableCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTableCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTableCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
