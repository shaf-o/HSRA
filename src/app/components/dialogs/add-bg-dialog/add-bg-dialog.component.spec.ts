import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBgDialogComponent } from './add-bg-dialog.component';

describe('AddBgDialogComponent', () => {
  let component: AddBgDialogComponent;
  let fixture: ComponentFixture<AddBgDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddBgDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBgDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
