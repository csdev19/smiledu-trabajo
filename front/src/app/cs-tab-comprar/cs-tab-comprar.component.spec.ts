import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTabComprarComponent } from './cs-tab-comprar.component';

describe('CsTabComprarComponent', () => {
  let component: CsTabComprarComponent;
  let fixture: ComponentFixture<CsTabComprarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTabComprarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTabComprarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
