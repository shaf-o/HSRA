import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsraOverviewComponent } from './hsra-overview.component';

describe('HsraOverviewComponent', () => {
  let component: HsraOverviewComponent;
  let fixture: ComponentFixture<HsraOverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsraOverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsraOverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
