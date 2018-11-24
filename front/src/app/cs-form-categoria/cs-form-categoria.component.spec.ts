import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormCategoriaComponent } from './cs-form-categoria.component';

describe('CsFormCategoriaComponent', () => {
  let component: CsFormCategoriaComponent;
  let fixture: ComponentFixture<CsFormCategoriaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsFormCategoriaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFormCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
