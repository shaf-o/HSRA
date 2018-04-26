import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HsraChecklistComponent } from './hsra-checklist.component';

describe('HsraChecklistComponent', () => {
  let component: HsraChecklistComponent;
  let fixture: ComponentFixture<HsraChecklistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HsraChecklistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HsraChecklistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
