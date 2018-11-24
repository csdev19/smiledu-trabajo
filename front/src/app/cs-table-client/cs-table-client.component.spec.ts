import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsTableClientComponent } from './cs-table-client.component';

describe('CsTableClientComponent', () => {
  let component: CsTableClientComponent;
  let fixture: ComponentFixture<CsTableClientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsTableClientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsTableClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
