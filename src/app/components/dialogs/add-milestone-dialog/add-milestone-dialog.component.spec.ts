import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMilestoneDialogComponent } from './add-milestone-dialog.component';

describe('AddMilestoneDialogComponent', () => {
  let component: AddMilestoneDialogComponent;
  let fixture: ComponentFixture<AddMilestoneDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddMilestoneDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMilestoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
