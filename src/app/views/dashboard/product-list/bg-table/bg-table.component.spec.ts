import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTableComponent } from './bg-table.component';

describe('BgTableComponent', () => {
  let component: BgTableComponent;
  let fixture: ComponentFixture<BgTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
