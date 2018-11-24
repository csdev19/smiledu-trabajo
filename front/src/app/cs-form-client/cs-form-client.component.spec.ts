import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsFormClientComponent } from './cs-form-client.component';

describe('CsFormClientComponent', () => {
  let component: CsFormClientComponent;
  let fixture: ComponentFixture<CsFormClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsFormClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsFormClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
