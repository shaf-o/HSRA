import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddClusterDialogComponent } from './add-cluster-dialog.component';

describe('AddClusterDialogComponent', () => {
  let component: AddClusterDialogComponent;
  let fixture: ComponentFixture<AddClusterDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddClusterDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddClusterDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
