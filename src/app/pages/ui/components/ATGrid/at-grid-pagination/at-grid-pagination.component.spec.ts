import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AtGridPaginationComponent } from './at-grid-pagination.component';

describe('AtGridPaginationComponent', () => {
  let component: AtGridPaginationComponent;
  let fixture: ComponentFixture<AtGridPaginationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtGridPaginationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AtGridPaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
