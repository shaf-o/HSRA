import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MilestoneQueueListComponent } from './milestone-queue-list.component';

describe('MilestoneQueueListComponent', () => {
  let component: MilestoneQueueListComponent;
  let fixture: ComponentFixture<MilestoneQueueListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MilestoneQueueListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MilestoneQueueListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
