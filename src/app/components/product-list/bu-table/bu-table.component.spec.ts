import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BuTableComponent } from './bu-table.component';

describe('BuTableComponent', () => {
  let component: BuTableComponent;
  let fixture: ComponentFixture<BuTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BuTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BuTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
