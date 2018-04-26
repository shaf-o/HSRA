import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChecklistDetailListComponent } from './checklist-detail-list.component';

describe('ChecklistDetailListComponent', () => {
  let component: ChecklistDetailListComponent;
  let fixture: ComponentFixture<ChecklistDetailListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChecklistDetailListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChecklistDetailListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
