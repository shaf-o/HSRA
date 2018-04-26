import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsraUpcomingComponent } from './hsra-upcoming.component';

describe('HsraUpcomingComponent', () => {
  let component: HsraUpcomingComponent;
  let fixture: ComponentFixture<HsraUpcomingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsraUpcomingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsraUpcomingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
