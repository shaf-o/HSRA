import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBuDialogComponent } from './add-bu-dialog.component';

describe('AddBuDialogComponent', () => {
  let component: AddBuDialogComponent;
  let fixture: ComponentFixture<AddBuDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBuDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBuDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
