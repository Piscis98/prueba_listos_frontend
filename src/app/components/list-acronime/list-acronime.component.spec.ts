import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListAcronimeComponent } from './list-acronime.component';

describe('ListAcronimeComponent', () => {
  let component: ListAcronimeComponent;
  let fixture: ComponentFixture<ListAcronimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListAcronimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListAcronimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
