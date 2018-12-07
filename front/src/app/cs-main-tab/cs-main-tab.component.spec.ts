import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CsMainTabComponent } from './cs-main-tab.component';

describe('CsMainTabComponent', () => {
  let component: CsMainTabComponent;
  let fixture: ComponentFixture<CsMainTabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CsMainTabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CsMainTabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
